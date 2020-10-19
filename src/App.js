import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import GroupList from './components/GroupList';
import StudentList from './components/StudentList';
import GenerationList from './components/GenerationList';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <SectionTitle />
        <GroupList />
        <GenerationList />
        <StudentList />
      </div>
    </RecoilRoot>
  );
}

export default App;
