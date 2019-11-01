import { SET_CUSTOMERS, SET_NAME_FILTER, SET_EMAIL_FILTER, SET_STATUS_FILTER, RESET } from './actionTypes';
import { Customer, CustomerStatus } from '../model';
import { createAction } from 'typesafe-actions';

export const setCustomers = createAction(SET_CUSTOMERS,
  action => { return (customers: Customer[]) => action(customers) });
export const setNameFilter = createAction(SET_NAME_FILTER,
  action => { return (name: string) => action(name) });
export const setEmailFilter = createAction(SET_EMAIL_FILTER,
  action => { return (email: string) => action(email) });
export const setStatusFilter = createAction(SET_STATUS_FILTER,
  action => { return (status: CustomerStatus, checked: boolean) => action({ status, checked }) });
export const reset = createAction(RESET);
