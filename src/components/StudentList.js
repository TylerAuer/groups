import React, { useState } from 'react';
import Bar from './Bar';
import EditBtn from './buttons/EditBtn';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import AddBtn from './buttons/AddBtn';
import AddStudent from './AddStudent';

const StudentList = ({ students }) => {
  const [addStudent, setAddStudent] = useState(false);

  return (
    <section id="student-list">
      <h2>
        Students
        <AddBtn text="Add Student" onClick={() => setAddStudent(true)} />
      </h2>
      <AddStudent open={addStudent} setOpen={setAddStudent} />
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
    </section>
  );
};

export default StudentList;
