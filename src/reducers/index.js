import { combineReducers } from 'redux';
import addressReducer from './addressReducer';
import dateReducer from './dateReducer';

export default combineReducers({
  address: addressReducer,
  date: dateReducer,
});
