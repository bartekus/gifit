import React from 'react';
import { Route, Switch } from 'react-router';

import DashboardPage from './pages/DashboardPage';
import BookmarkPage from './pages/BookmarkPage';
import Page404 from './pages/404Page';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route path="/bookmark" component={BookmarkPage} />
      <Route path="*" component={Page404} />
    </Switch>
  );
};
