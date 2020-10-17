import React from 'react';
import { RecoilRoot } from 'recoil';
import Header from './components/Header';
import Controls from './components/Controls';
import GenerationList from './components/GenerationList';
import StudentList from './components/StudentList';
import GroupList from './components/GroupList';
import './App.css';

import stubWithData from './stubs/two_s_and_two_g';
import stubEmpty from './stubs/empty';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        {/* <Controls title={store.sections[section].name} /> */}

        {/* <GroupList students={studentList} groups={groupList} /> */}

        {/* <GenerationList setGeneration={setGeneration} generations={genList} /> */}

        <StudentList />
      </div>
    </RecoilRoot>
  );
}

export default App;
