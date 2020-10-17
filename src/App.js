import React, { useState } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import IterationList from './components/IterationList';
import StudentList from './components/StudentList';
import GroupList from './components/GroupList';

import './App.css';

import mock from './grouping_algorithm/mock_data';

function App() {
  const [data, setData] = useState(mock);
  const [activeSection, setActiveSection] = useState(0);
  const [shownIter, setShownIter] = useState(0);

  const students = data.sections[activeSection].students;
  const iterations = data.sections[activeSection].iterations;
  const groups =
    (iterations[shownIter] && iterations[shownIter].groups) || null;

  return (
    <div className="App">
      <Header />
      <Controls title={data.sections[activeSection].name} />

      <GroupList students={students} groups={groups} />

      <IterationList setShownIter={setShownIter} iterations={iterations} />

      <StudentList students={students} />
    </div>
  );
}

export default App;
