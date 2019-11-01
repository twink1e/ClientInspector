import * as React from 'react';
import { connect } from 'react-redux';
import { CustomerListState } from '../redux/reducers';
import * as selectors from '../redux/selector';

const mapStateToProps = (state: CustomerListState) => ({
  customers: selectors.getFilteredCustomers(state)
});

type Props = ReturnType<typeof mapStateToProps>;

function CustomerList({ customers }: Props) {
  return (
    <h1>haha</h1>
  );
}

export default connect(
  mapStateToProps,
  {}
)(CustomerList);
