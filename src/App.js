import React from 'react';
import { RecoilRoot } from 'recoil';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import EditableSectionTitle from './components/EditableSectionTitle';
import GroupList from './components/GroupList';
import StudentList from './components/StudentList';
import GenerationList from './components/GenerationList';
import './App.css';

function App() {
  return (
    <HashRouter>
      <RecoilRoot>
        <Switch>
          <Route path="/about"></Route>
          <Route path="/auth/login"></Route>
          <Route path="/">
            <div className="App">
              <Header />
              <EditableSectionTitle />
              <GroupList />
              <GenerationList />
              <StudentList />
              {/* <Relations /> */}
            </div>
          </Route>
        </Switch>
      </RecoilRoot>
    </HashRouter>
  );
}

export default App;
