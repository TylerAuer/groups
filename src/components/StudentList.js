import React from 'react';
import Bar from './Bar';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const StudentList = ({ students }) => {
  return (
    <section id="list-of-groupings">
      <h2>Students in Section</h2>
      {students.map((s) => {
        return (
          <Bar key={s.id}>
            <div>
              {s.id + 1} - {s.name}
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
