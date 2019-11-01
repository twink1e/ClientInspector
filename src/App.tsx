import * as React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import CustomerListView from './components/CustomerListView';

class App extends React.Component {
  public render() {
    return (
      <div>
      <Switch>
      <Route path="/customer/:id">
        <h1>haha</h1>
      </Route>
      <Route path="/">
        <CustomerListView />
      </Route>
    </Switch>
      </div>
    );
  }
}

export default App;
