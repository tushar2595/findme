import { combineReducers } from 'redux';

import { authentication } from './UserReducer';


const rootReducer = combineReducers({
  authentication,

});

export default rootReducer;