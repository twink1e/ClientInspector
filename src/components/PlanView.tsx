import * as React from 'react';
import { Plan } from '../model';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type Props = {
  plan: Plan
}

const useStyles = makeStyles({
  card: {
    marginTop:50,
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const scheduleView = (plan: Plan) => {
  const schedule = plan.recurringInvestmentSchedule;
  if (schedule == undefined) {
    return <div/>;
  }
  return (
    <div>
      <br />
      <Typography color="textSecondary"> Schedule </Typography>
      <Typography variant="body2">
        Interval: {schedule.interval}
        <br />
        Starting: {schedule.startingFrom}
        <br />
        Amount: {schedule.amount}
      </Typography>
    </div>
  );
}

const PlanView = ({ plan }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
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
        <Typography variant="body2">
          currency: {plan.planCcy}
          <br />
          Intial amount: {plan.initialInvestmentAmount}
        </Typography>
        {scheduleView(plan)}
      </CardContent>
    </Card>
  );
}

export default PlanView;
