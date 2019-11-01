import * as React from 'react';
import APIService from '../service';
import { Goal } from '../model';

type Props = {
  id: string
}

type State = {
  goal: Goal | undefined,
  loading: boolean
}

export default class CustomerDetail extends React.Component<Props, State> {
  state: State = {
    goal: undefined,
    loading: true
  };

  componentDidMount() {
    APIService.getCustomerGoal(this.props.id)
    .then((res: Goal | undefined) => this.setState(state => ({
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
