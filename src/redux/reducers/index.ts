import { combineReducers } from 'redux';
import filters from './filters';
import customers from './customers';

export default combineReducers({ filters, customers });
