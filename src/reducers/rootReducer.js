import { combineReducers } from 'redux';
import filterReducer from './filterReducer';
import sizeReducer from './sizeReducer';

const rootReducer = combineReducers({
  filterReducer,
  sizeReducer,
});

export default rootReducer;
