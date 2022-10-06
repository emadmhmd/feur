import { combineReducers } from 'redux';
import getReducer from './get.reducer';
import statusReducer from './status.reducer';
import userReducer from './user.reducer';
import taskReducer from './task.reducer';

export default combineReducers({
  userReducer,
  getReducer,
  statusReducer,
  taskReducer,
});
