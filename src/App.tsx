import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import CustomerList from './components/CustomerList';
import CustomerDetail from './components/CustomerDetail';

class App extends React.Component {
  public render() {
    return (
      <div>
      <Switch>
      <Route path="/customer/:id"
        render={route =>
          <CustomerDetail id={route.match.params.id} history={route.history}/> }/>
      <Route path="/">
        <CustomerList />
      </Route>
    </Switch>
      </div>
    );
  }
}

export default App;
