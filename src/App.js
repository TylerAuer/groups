import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import LandingPage from './pages/Landing';
import AppPage from './pages/App';

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <Switch>
          <Route exact path="/app">
            <AppPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
