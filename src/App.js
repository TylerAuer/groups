import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import EditableSectionTitle from './components/EditableSectionTitle';
import GroupList from './components/GroupList';
import StudentList from './components/StudentList';
import GenerationList from './components/GenerationList';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <EditableSectionTitle />
        <GroupList />
        <GenerationList />
        <StudentList />
        {/* <Relations /> */}
      </div>
    </RecoilRoot>
  );
}

export default App;
