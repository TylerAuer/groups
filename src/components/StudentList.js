/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { studentListAtom } from '../recoil/atoms';
import Bar from './Bar';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import ControlBtn from './buttons/ControlBtn';
import AddStudent from './AddStudent';
import EditableStudentName from './EditableStudentName';

const StudentList = () => {
  const [addModal, setAddModal] = useState(false);
  const [students, setStudents] = useRecoilState(studentListAtom);

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

    setStudents((oldStudents) => [...oldStudents, ...newStudents]);
  };

  const toggleStudentActive = (id) => {
    const student = { ...students[id] }; // Grab and copy the student
    student.active = !student.active; // Toggle their activeness

    const modifiedStudents = [...students]; // Make copy of state
    modifiedStudents[id] = student; // replace student with new one

    setStudents(modifiedStudents); // dispatch change to recoil
  };

  const listOfStudents = [...students]
    .filter((s) => s.active) // filter out inactive students
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
    });

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
      {listOfStudents}
    </section>
  );
};

export default StudentList;
