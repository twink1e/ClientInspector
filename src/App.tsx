import * as React from 'react';
import './App.css';
import APIService from './service';
import Filter from './components/CustomerFilter';
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
        <Filter/>
      </div>
    );
  }
}

export default App;
