/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { studentState } from '../recoil/student';
import { useRecoilState } from 'recoil';
import Bar from './Bar';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import ControlBtn from './buttons/ControlBtn';
import AddStudent from './AddStudent';
import EditableStudentName from './EditableStudentName';

const StudentList = () => {
  const [students, setStudents] = useRecoilState(studentState);
  const [addModal, setAddModal] = useState(false);

  const h2Css = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const addStudents = (namesArray) => {
    let id = students.length;

    const cleanedNames = namesArray
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    const newStudents = cleanedNames.map((name) => ({
      id: id++,
      name: name,
      active: true,
    }));

    setStudents([...students, ...newStudents]);
  };

  const toggleStudentActive = (id) => {
    const student = { ...students[id] }; // Grab and copy the student
    student.active = !student.active; // Toggle their activeness

    const modifiedStudents = [...students]; // Make copy of state
    modifiedStudents[id] = student; // replace student with new one

    setStudents(modifiedStudents); // dispatch change to recoil
  };

  return (
    <section id="student-list">
      <h2 css={h2Css}>
        Students
        <ControlBtn text="Add" onClick={() => setAddModal(true)} />
      </h2>
      <AddStudent
        open={addModal}
        setOpen={setAddModal}
        addStudents={addStudents}
      />
      {students
        .filter((s) => s.active) // Hide inactive students
        .map((s, index) => {
          return (
            <Bar key={s.id}>
              <div>
                <div
                  css={css`
                    display: inline-block;
                  `}
                >
                  {index + 1}
                </div>
                <EditableStudentName id={s.id} />
              </div>
              <div>
                <TextOnlyBtn
                  onClick={() => toggleStudentActive(s.id)}
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
