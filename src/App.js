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
  const [data, setData] = useState(stubWithData);
  const [section, setSection] = useState(0);
  const [generation, setGeneration] = useState(0);

  const studentList = data.sections[section].students;
  const genList = data.sections[section].generations;
  const groupList = (genList[generation] && genList[generation].groups) || null;

  const addStudent = (name) => {
    const id = studentList.length;
    const priorGens = (studentList[0] && studentList[0].history.length) || 0;

    const updated = { ...data };
    updated.sections[section].students.push({
      id,
      name: name,
      history: new Array(priorGens).fill(null),
      active: true,
    });

    setData(updated);
  };

  const deactivateStudent = (id) => {
    const updated = { ...data };
    updated.sections[section].students[id].active = false;

    setData(updated);
  };

  return (
    <div className="App">
      <Header />
      <Controls title={data.sections[section].name} />

      <GroupList students={studentList} groups={groupList} />

      <GenerationList setGeneration={setGeneration} generations={genList} />

      <StudentList
        addStudent={addStudent}
        deactivateStudent={deactivateStudent}
        students={studentList}
      />
    </div>
  );
}

export default App;
