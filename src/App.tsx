import * as React from 'react';
import { Switch, Route } from "react-router-dom";
import CustomerListView from './components/CustomerListView';
import CustomerDetail from './components/CustomerDetail';

class App extends React.Component {
  public render() {
    return (
      <div>
      <Switch>
      <Route path="/customer/:id"
        render={route =>
          <CustomerDetail id={route.match.params.id} /> }/>
      <Route path="/">
        <CustomerListView />
      </Route>
    </Switch>
      </div>
    );
  }
}

export default App;
