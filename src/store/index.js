import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { apiMiddleware } from '../services/api'
import logger from 'redux-logger'

export const configureStore = () => {
  const middlewares = [apiMiddleware]
  if (__DEV__) {
    middlewares.push(logger);
  }
  return createStore(rootReducer, applyMiddleware(...middlewares))
}