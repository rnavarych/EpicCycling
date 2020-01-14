import { combineReducers } from 'redux'

import stations from './stations'
import bicycles from './bicycles'
//import details from './details'

export default combineReducers({
  stations,
  bicycles,
  //details
})