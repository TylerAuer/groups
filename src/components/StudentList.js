import React from 'react';
import Bar from './Bar';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import EditIcon from './EditIcon';

const StudentList = ({ students }) => {
  return (
    <section id="student-list">
      <h2>Students in Section</h2>
      {students.map((s) => {
        return (
          <Bar key={s.id}>
            <div>
              {s.id + 1} - {s.name}
              <EditIcon />
            </div>
            <div>
              <TextOnlyBtn onClick={null} text="Delete" />
            </div>
          </Bar>
        );
      })}
    </section>
  );
};

export default StudentList;
