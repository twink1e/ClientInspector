import { createReducer } from 'typesafe-actions';
import { Customer } from '../../model';
import { setCustomers } from '../actions';

export type CustomersState = Readonly<{
  customers: ReadonlyArray<Customer>;
}>;

const initialState: CustomersState = {
  customers: []
};

export default createReducer(initialState.customers)
  .handleAction(setCustomers, (state, action) => action.payload);
