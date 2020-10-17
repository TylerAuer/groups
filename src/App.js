import React, { useState } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import GenerationList from './components/GenerationList';
import StudentList from './components/StudentList';
import GroupList from './components/GroupList';

import './App.css';

import stubWithData from './stubs/two_s_and_two_g';
import stubEmpty from './stubs/empty';

function App() {
  const [data, setData] = useState(stubEmpty);
  const [section, setSection] = useState(0);
  const [generation, setGeneration] = useState(0);

  const students = data.sections[section].students;
  const iterations = data.sections[section].iterations;
  const groups =
    (iterations[generation] && iterations[generation].groups) || null;

  return (
    <div className="App">
      <Header />
      <Controls title={data.sections[section].name} />

      <GroupList students={students} groups={groups} />

      <GenerationList setGeneration={setGeneration} generations={iterations} />

      <StudentList students={students} />
    </div>
  );
}

export default App;
