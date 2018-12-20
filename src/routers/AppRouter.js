import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import MainPage from '../components/MainPage';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/test" component={MainPage} />
        <Route render={() => (<h1> 404 ERROR </h1>)} />
    </Switch>
  </Router>
);

export default AppRouter;
