import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import PageNotFound from '../PageNotFound';

function App() {
  return (
    <>
      <h1>t123</h1>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
