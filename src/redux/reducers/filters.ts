import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { CustomerStatus } from '../../model';
import { SET_NAME_FILTER, SET_EMAIL_FILTER, SET_STATUS_FILTER } from '../actionTypes';

export type FilterState = Readonly<{
  name: string;
  email: string;
  statuses: ReadonlyArray<CustomerStatus>;
}>;

const initialState: FilterState = {
  name: '',
  email: '',
  statuses: Object.keys(CustomerStatus).map(e => CustomerStatus[e])
};

const name = createReducer(initialState.name)
  .handleAction(SET_NAME_FILTER, (state, action) => action.payload);

const email = createReducer(initialState.email)
  .handleAction(SET_EMAIL_FILTER, (state, action) => action.payload);

const statuses = createReducer(initialState.statuses)
  .handleAction(SET_STATUS_FILTER, (state, action) => action.payload);

export default combineReducers({
  name,
  email,
  statuses
});
