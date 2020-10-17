import React, { useState } from 'react';
import Header from './components/Header';
import GroupingList from './components/GroupingList';
import StudentList from './components/StudentList';

import './App.css';

import mock from './grouping_algorithm/mock_data';

function App() {
  const [data, setData] = useState(mock);
  const [sectionId, setSectionId] = useState(0);

  const students = data.sections[sectionId].students;
  const groupings = data.sections[sectionId].groupings;

  return (
    <div className="App">
      <Header />
      <StudentList students={students} />
      <GroupingList groupings={groupings} />
    </div>
  );
}

export default App;
