import * as React from 'react';
import APIService from '../service';
import { Goal } from '../model';

type Props = {
  id: string
}

type State = {
  goal: Goal | undefined
}

export default class CustomerDetail extends React.Component<Props, State> {
  state: State = {
    goal: undefined
  };

  componentDidMount() {
    APIService.getCustomerGoal(this.props.id)
    .then((res: Goal | undefined) => this.setState(state => ({
      goal: res
    })
    ));
  }

  render() {
    const goal = this.state.goal;
    if (goal == undefined) {
      return <h1>Invalid customer, or this customer has no goal.</h1>;
    }
    return (
      <div>
        {goal.customerId}
      </div>
    );
  }
}
