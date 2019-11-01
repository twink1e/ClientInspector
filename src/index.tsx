import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import CustomerListView from './components/CustomerListView';

ReactDOM.render(
  <Provider store={store}>
    <CustomerListView />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
