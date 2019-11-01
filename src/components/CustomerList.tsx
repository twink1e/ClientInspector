import * as React from 'react';
import { connect } from 'react-redux';
import CustomerFilter from './CustomerFilter';
import CustomerTable from './CustomerTable';
import APIService from '../service';
import { Customer } from '../model';
import { setCustomers, reset } from '../redux/actions';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => createStyles({
  appBar: {
    alignItems: 'center',
  },
  filter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  table: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
  }
});

type Props = {
  setCustomers: (customers: Customer[]) => void
  reset: () => void
} & WithStyles<typeof styles>;

class CustomerList extends React.Component<Props> {
  componentDidMount() {
    this.props.reset()
    APIService.getCustomerList()
    .then(res => this.props.setCustomers(res));
  }

  render() {
    const classes = this.props.classes;

    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6">
              Customer List
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.filter}>
          <CustomerFilter/>
        </div>
        <div className={classes.table}>
          <CustomerTable/>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  { setCustomers, reset }
)(withStyles(styles)(CustomerList));
