import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import { apiMiddleware } from '../services/api'

export const configureStore = () => {
  const middlewares = [apiMiddleware]
  return createStore(rootReducer, applyMiddleware(...middlewares))
}