import { combineReducers } from 'redux';
import addressReducer from './addressReducer';
import dateReducer from './dateReducer';
import itemsReducer from './itemsReducer';

export default combineReducers({
  address: addressReducer,
  date: dateReducer,
  items: itemsReducer,
});
