import * as React from 'react';
import { connect } from 'react-redux';
import { CustomerListState } from '../redux/reducers';
import * as selectors from '../redux/selector';
import { Customer } from '../model';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const mapStateToProps = (state: CustomerListState) => ({
  customers: selectors.getFilteredCustomers(state)
});

type Props = ReturnType<typeof mapStateToProps>;

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
});

function CustomerList({ customers }: Props) {
  const classes = useStyles();
  const history = useHistory();
  const routeToDetail = (id: string) => {
    history.push(`/customer/${id}`);
  }
  return (
    <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Legal Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(customer => (
            <TableRow key={customer.id} onClick={()=>routeToDetail(customer.id)}>
              <TableCell component="th" scope="row">
                {personalDetailsString(customer, 'firstName')}
              </TableCell>
              <TableCell>{personalDetailsString(customer, 'lastName')}</TableCell>
              <TableCell>{personalDetailsString(customer, 'legalName')}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}

export default connect(
  mapStateToProps,
  {}
)(CustomerList);

// helpers
const personalDetailsString = (customer: Customer, field: string) => {
  const details = customer.personalDetails;
  if (details == undefined) {
    return '';
  }
  return details[field];
}
