import { createReducer } from 'typesafe-actions';
import { Customer } from '../../model';
import { SET_CUSTOMERS } from '../actionTypes';

export type CustomersState = Readonly<{
  customers: ReadonlyArray<Customer>;
}>;

const initialState: CustomersState = {
  customers: []
};

export default createReducer(initialState.customers)
  .handleAction(SET_CUSTOMERS, (state, action) => action.payload);
