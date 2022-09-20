import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './components/main';
import './index.css'

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Main />
  </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);