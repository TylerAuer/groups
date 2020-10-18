import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Controls from './components/Controls';
import GroupList from './components/GroupList';
import StudentList from './components/StudentList';
import GenerationList from './components/GenerationList';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <Controls />
        <GroupList />
        <GenerationList />
        <StudentList />
      </div>
    </RecoilRoot>
  );
}

export default App;
