import * as React from 'react';
import APIService from '../service';
import { Goal } from '../model';
import { History } from 'history';
import GoalView from './GoalView';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = (theme: Theme) => createStyles({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = {
  id: string
  history: History
} & WithStyles<typeof styles>;

type State = {
  goal: Goal | undefined,
  loading: boolean
}

class CustomerDetail extends React.Component<Props, State> {
  state: State = {
    goal: undefined,
    loading: true
  };

  componentDidMount() {
    APIService.getCustomerGoal(this.props.id)
    .then((res: Goal | undefined) =>
    this.setState(state => ({
      goal: res,
      loading: false
      })
    ));
  }

  render() {
    const classes = this.props.classes;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={this.routeToList}>
              <ArrowBackIcon />
            </IconButton>
            <div className={classes.title}>
              <Typography variant="h6">
                Customer Detail
              </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.goal}>
        {this.goalView()}
        </div>
      </div>
    );
  }

  goalView = () => {
    if (this.state.loading) {
      return <div/>;
    }
    const goal = this.state.goal;
    if (goal == undefined) {
      return <h1>Invalid customer, or this customer has no goal.</h1>;
    }
    return <GoalView goal={goal}/>;
  }

  routeToList = () => {
    this.props.history.push('/');
  }
}

export default withStyles(styles)(CustomerDetail);
