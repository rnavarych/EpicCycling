import { combineReducers } from 'redux'

import stations from './stations'
import bicycles from './bicycles'

export default combineReducers({
  stations,
  bicycles,
})