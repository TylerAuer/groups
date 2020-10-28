import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import LoginPage from './LoginPage';
import LandingPage from './LandingPage';
import AppPage from './AppPage';

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <div className="App">
          <Header />
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
        </div>
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
