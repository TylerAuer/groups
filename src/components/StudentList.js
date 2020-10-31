/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userDataAtom, activeSectionIdxAtom } from '../recoil/atoms';
import { studentList } from '../recoil/selectors/students';
import Bar from './Bar';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import ControlBtn from './buttons/ControlBtn';
import AddStudent from './AddStudent';
import EditableStudentName from './EditableStudentName';
import cloneDeep from 'lodash.clonedeep';

const StudentList = () => {
  const setData = useSetRecoilState(userDataAtom);
  const [addModal, setAddModal] = useState(false);
  const students = useRecoilValue(studentList);
  const idx = useRecoilValue(activeSectionIdxAtom);

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

    setData((prev) => {
      const oldStudents = prev.GroupUsSections[idx].section_info.students;
      const next = cloneDeep(prev);

      next.GroupUsSections[idx].section_info.students = [
        ...oldStudents,
        ...newStudents,
      ];

      next.GroupUsSections[idx].section_info.version =
        prev.GroupUsSections[idx].section_info.version + 1;

      return next;
    });
  };

  const toggleStudentActive = (id) => {
    setData((prev) => {
      const next = cloneDeep(prev);
      next.GroupUsSections[idx].section_info.students[id].active = !next
        .GroupUsSections[idx].section_info.students[id].active;

      next.GroupUsSections[idx].section_info.version =
        next.GroupUsSections[idx].section_info.version + 1;

      return next;
    });
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
