import * as React from 'react';
import { connect } from 'react-redux';

import CustomerFilter from './CustomerFilter';
import CustomerList from './CustomerList';
import APIService from '../service';
import { Customer } from '../model';
import { setCustomers } from '../redux/actions';

type Props = {
  setCustomers: (customers: Customer[]) => void
}

class CustomerListView extends React.Component<Props> {
  componentDidMount() {
    APIService.getCustomerList()
    .then(res => this.props.setCustomers(res));
  }

  render() {
    return (
      <section>
      <CustomerFilter/>
      <CustomerList/>
      </section>
    )
  }
}

export default connect(
  null,
  { setCustomers }
)(CustomerListView);
