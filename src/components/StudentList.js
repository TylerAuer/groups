import React, { useState } from 'react';
import Bar from './Bar';
import EditBtn from './buttons/EditBtn';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import AddBtn from './buttons/AddBtn';
import AddStudent from './AddStudent';

const StudentList = ({ students, addStudent, deactivateStudent }) => {
  const [addModal, setAddModal] = useState(false);

  return (
    <section id="student-list">
      <h2>
        Students
        <AddBtn text="Add Student" onClick={() => setAddModal(true)} />
      </h2>
      <AddStudent
        open={addModal}
        setOpen={setAddModal}
        addStudent={addStudent}
      />
      {students
        .filter((s) => s.active) // Hide inactive students
        .map((s) => {
          return (
            <Bar key={s.id}>
              <div>
                {s.id + 1} - {s.name}
                <EditBtn />
              </div>
              <div>
                <TextOnlyBtn
                  onClick={() => deactivateStudent(s.id)}
                  text="Deactivate"
                />
              </div>
            </Bar>
          );
        })}
    </section>
  );
};

export default StudentList;
