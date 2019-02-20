import { Router, Route, browserHistory } from 'react-router';
import { App,AppTheme } from '../containers';
import React from 'react';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={AppTheme} />
    <Route path="/tinper" component={App} />
  </Router>
)
