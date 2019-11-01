import * as React from 'react';
import APIService from '../service';
import { Goal, Plan } from '../model';
import { useHistory } from 'react-router-dom';

import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = (theme: Theme) => createStyles({
  card: {
    minWidth: 275,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  appBar: {
  },
  appTitle: {
    flexGrow: 1,
    align: 'center',
  },
  root: {
    flexGrow: 1,
  },
});

type Props = {
  id: string
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
    if (this.state.loading) {
      return <div/>;
    }
    const goal = this.state.goal;
    const classes = this.props.classes;

    if (goal == undefined) {
      return <h1>Invalid customer, or this customer has no goal.</h1>;
    }
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={this.routeToList}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant="h6" className={classes.appTitle}>
              Customer Detail
            </Typography>
          </Toolbar>
        </AppBar>
        {goal.name}
        {this.plansView(goal)}
      </div>
    );
  }

  routeToList = () => {
    useHistory().push('/');
  }

  plansView = (goal: Goal) => {
    const plans = goal.plans;
    if (plans == undefined) {
      return <div/>;
    }
    return (
      <div>
      {plans.map(plan => this.planView(plan))}
      </div>
    );
  }

  scheduleView = (plan: Plan) => {
    const schedule = plan.recurringInvestmentSchedule;
    if (schedule == undefined) {
      return <div/>;
    }
    return (
      <Typography>
        Interval: {schedule.interval}
        <br />
        Starting: {schedule.startingFrom}
        <br />
        Amount: {schedule.amount}
      </Typography>
    );
  }

  planView = (plan: Plan) => {
    const classes = this.props.classes;
    return (
      <Card key={plan.planId} className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Plan
          </Typography>
          <Typography variant="h5" component="h2">
            {plan.modelPortfolioName}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            { plan.createdAt}
          </Typography>
          <Typography variant="body2" component="p">
            currency: {plan.planCcy}
            <br />
            Intial amount: {plan.initialInvestmentAmount}
          </Typography>
          {this.scheduleView(plan)}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(CustomerDetail);
