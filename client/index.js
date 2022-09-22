import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import Main from './components/main';
import './index.css'

import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

console.log(history)

ReactDOM.render(
  <Router history={history}>
    <Main history={history}/>
  </Router>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);