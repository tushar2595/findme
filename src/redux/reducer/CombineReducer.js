import { combineReducers } from 'redux'

import userReducer from '../reducer/UserReducer';

const rootReducer = combineReducers({
  user: userReducer
})

export default rootReducer