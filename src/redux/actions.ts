import { SET_CUSTOMERS, SET_NAME_FILTER, SET_EMAIL_FILTER, SET_STATUS_FILTER } from './actionTypes';
import { Customer, CustomerStatus } from '../model';
import { action } from 'typesafe-actions';

export const setCustomers = (customers: Customer[]) => action(SET_CUSTOMERS, customers);
export const setNameFilter = (name: string) => action(SET_NAME_FILTER, name);
export const setEmailFilter = (email: string) => action(SET_EMAIL_FILTER, email);
export const setStatusFilter = (statuses: CustomerStatus[]) => action(SET_STATUS_FILTER, statuses);
