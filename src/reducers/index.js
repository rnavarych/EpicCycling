import { combineReducers } from 'redux'

import stations from './stations'
import bicycles from './bicycles'
import registration from "./registration";

export default combineReducers({
  stations,
  bicycles,
  registration,
})