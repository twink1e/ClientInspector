import { CustomerListState } from './reducers';
import { Customer, CustomerStatus } from '../model';

export const getFilteredCustomers = (state: CustomerListState): Customer[] => {
  const allCustomers = state.customers;
  return allCustomers.filter(customer =>
    customer.email.includes(state.filters.email)
    && containsName(customer, state.filters.name)
    && containsStatus(customer, state.filters.statuses)
  );
}

// helpers
const containsName = (customer: Customer, name: string): boolean => {
  const details = customer.personalDetails;
  if (details == undefined) {
    return false;
  }
  return details.firstName.includes(name)
  || details.lastName.includes(name)
  || details.legalName.includes(name);
}

const containsStatus = (customer: Customer, statuses: ReadonlyArray<CustomerStatus>): boolean => {
  for (const status in statuses) {
    if (customer.status == status) {
      return true;
    }
  }
  return false;
}
