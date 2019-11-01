import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import filters from './filters';
import customers from './customers';

const customerListReducer = combineReducers({ filters, customers });
export default customerListReducer;
export type CustomerListState = StateType<typeof customerListReducer>;
