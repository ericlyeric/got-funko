import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import LoginPage from './auth/LoginPage';
import NavigationBar from './common/NavigationBar';
import PageNotFound from '../PageNotFound';
import PrivateRoute from '../hocs/PrivateRoute';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <PrivateRoute exact path="/">
          <Route exact path="/">
            <HomePage />
          </Route>
        </PrivateRoute>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
