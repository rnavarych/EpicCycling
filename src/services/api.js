import { BASE_URL } from '../configs';
import { REQUEST_TIMEOUT } from '../configs/settings';

import * as actionTypes  from '../constants/actionTypes';
import { server100 } from '../services/mockdata';

async function getFetchAction(endpoint, method, body) {
    let headers = {
        'Accept': 'application/json',
    };

    return fetch(`${BASE_URL}${endpoint}`, {
        method,
        headers,
    });
}

const timeoutAction = reject => setTimeout(() => reject(new Error('request timeout')), REQUEST_TIMEOUT);

export function callApi(endpoint, method, body) {
    return Promise.race([
        getFetchAction(endpoint, method, body),
        new Promise((resolve, reject) => timeoutAction(reject)),
    ]).then((response) => {
        return response.json().then((json) => {
            return { json, response }
        });
    }).then(({ json, response }) => {
        if (!response.ok || !json) {
            json.code = response.status;
            return Promise.reject(json);
        }
        return json;
    });
}

export const apiMiddleware = store => next => action => {
    let { endpoint } = action;
    const { body, types, method } = action;

    if (!endpoint && !method && !types && action.type) {
        return next(action);
    }

    const state = store.getState();

    if (typeof endpoint === 'function') {
        endpoint = endpoint(state);
    }

    if (!method) {
        throw new Error('method is not exist');
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    const [requestType, successType, failureType] = types;

    next(Object.assign({}, { type: requestType }));


    if (__DEV__) {

      if (requestType === actionTypes.LIST_OF_STATIONS_REQUEST) {
        next({ type: successType, result: { data: server100.map(
            item => 
            {   
                const total_amount = Math.floor(Math.random() * 100)
                return ({
                    ...item,
                    total_amount_of_bicycles: total_amount,
                    amount_of_bicycle_available: Math.floor(total_amount * Math.random())
                })
            }
        ) } });
        return
      }
      if (requestType === actionTypes.LIST_OF_BICYCLES_REQUEST) {
        next({ type: successType, result: { data: server100 } });
        return
      }

    } else {
      return callApi(endpoint, method, body)
      .then(response => {
          const result = response;
          next(Object.assign({}, { type: successType, result }));
          return result;
        },
        (error) => {
          console.log(error)
          next(Object.assign(
            {},
            {
              type: failureType,
              status: 'ERROR',
              errorCode: error.code,
              description: error.data
            },
          ));
        },
      );
    }
};