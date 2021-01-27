import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './home/HomePage';
import NavigationBar from './common/NavigationBar';
import PageNotFound from '../PageNotFound';

function App() {
  return (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
