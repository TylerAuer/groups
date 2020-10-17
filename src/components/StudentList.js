import React from 'react';
import Bar from './Bar';
import EditBtn from './buttons/EditBtn';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import AddEntryBtn from './buttons/AddEntryBtn';

const StudentList = ({ students }) => {
  return (
    <section id="student-list">
      <h2>Students in Section</h2>
      {students.map((s) => {
        return (
          <Bar key={s.id}>
            <div>
              {s.id + 1} - {s.name}
              <EditBtn />
            </div>
            <div>
              <TextOnlyBtn onClick={null} text="Delete" />
            </div>
          </Bar>
        );
      })}
      <AddEntryBtn text="Add Student" onClick={null} />
    </section>
  );
};

export default StudentList;
