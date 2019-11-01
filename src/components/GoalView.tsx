import * as React from 'react';
import { Goal } from '../model';
import PlanView from './PlanView';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type Props = {
  goal: Goal
}

const useStyles = makeStyles({
  summary: {
    marginTop: 20,
  },
});


const GoalView = ({ goal }: Props) => {
  const plans = goal.plans;
  if (plans == undefined) {
    return <div/>;
  }
  const classes = useStyles();
  return (
    <div>
    <Typography className={classes.summary}>
      Goal name: {goal.name}
      <br />
      Created at: {goal.createdAt}
      <br />
      Target stock ratio: {goal.targetStockRatio}
      <br />
      Status: {goal.status}
    </Typography>
    {plans.map(plan => <PlanView key={plan.planId} plan={plan}/>)}
    </div>
  );
}

export default GoalView;
