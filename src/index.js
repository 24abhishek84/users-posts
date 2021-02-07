import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import configureStore from './store.js';
import Users from './Components/Users';
import Posts from './Components/Posts';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Route exact path="/" component={Users} />
      <Route exact path="/posts" component={Posts} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
