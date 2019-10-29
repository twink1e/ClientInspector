import * as React from 'react';
import './App.css';
import APIService from './service';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    APIService.getCustomerList()
    .then(res => console.log(res))
    .catch(e => console.log(e));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
