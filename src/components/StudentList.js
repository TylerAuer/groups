/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { useState } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { userDataAtom, activeSectionIdxAtom } from '../recoil/atoms';
import { studentList } from '../recoil/selectors/students';
import { colors } from '../constants/styles';
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

    & .inactive-count {
      color: ${colors.mediumgrey};
    }
  `;

  const studentCss = css`
    .left,
    .right {
      display: flex;
      justify-content: left;
      align-items: baseline;
    }

    .right {
      justify-content: right;

      & button {
        width: 10rem;
      }
    }

    .index {
      width: 2rem;
    }
  `;

  const inactiveCss = css`
    color: ${colors.mediumgrey};
    border-color: ${colors.mediumgrey};

    & input {
      color: ${colors.mediumgrey};
    }

    & .warning {
      font-style: italic;
      font-size: 1.6rem;
      padding-right: 0.5rem;

      @media (max-width: 400px) {
        display: none;
      }
    }

    & button {
      color: ${colors.mediumgrey};
    }
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

  let activeCount = 0;
  let inactiveCount = 0;
  students.forEach((s) => {
    if (s.active) {
      activeCount++;
    } else {
      inactiveCount++;
    }
  });

  const listOfStudents = [...students]
    .sort((a, b) => {
      if (a.active && b.active) return 0;
      else if (a.active) return -1;
      else if (b.active) return 1;
      else return 0;
    }) // filter out inactive students
    .map((s, index) => {
      return (
        <Bar key={s.id} styles={[studentCss, s.active ? null : inactiveCss]}>
          <div className="left">
            <div className="index">{s.active ? index + 1 : ''}</div>
            <EditableStudentName id={s.id} />
          </div>

          <div className="right">
            <div className="warning">
              {s.active ? '' : 'Excluded from new generations'}
            </div>
            <TextOnlyBtn
              onClick={() => toggleStudentActive(s.id)}
              text={s.active ? 'Exclude' : 'Include'}
            />
          </div>
        </Bar>
      );
    });

  return (
    <section id="student-list">
      <h2 css={h2Css}>
        <div>
          Students ( {activeCount}
          {inactiveCount ? (
            <React.Fragment>
              {' / '}
              <span className="inactive-count">{inactiveCount} </span>
            </React.Fragment>
          ) : (
            ' '
          )}
          )
        </div>
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
