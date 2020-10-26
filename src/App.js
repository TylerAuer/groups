import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import EditableSectionTitle from './components/EditableSectionTitle';
import GroupList from './components/GroupList';
import StudentList from './components/StudentList';
import GenerationList from './components/GenerationList';
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
            <Route path="/app">
              <AppPage />
            </Route>
            <Route path="/login">
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
