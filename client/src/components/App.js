/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './common/Navigation';
import HomePage from './homePage/HomePage';
import PageNotFound from './PageNotFound';
import Login from './loginPage/LoginPage';
import RegisterPage from './registerPage/RegisterPage';

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
};

export default App;
