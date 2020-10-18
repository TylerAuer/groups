import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Controls from './components/Controls';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <Controls />

        {/* <GroupList students={studentList} groups={groupList} /> */}

        {/* <GenerationList setGeneration={setGeneration} generations={genList} /> */}

        <StudentList />
      </div>
    </RecoilRoot>
  );
}

export default App;
