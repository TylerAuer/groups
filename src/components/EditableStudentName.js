/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userDataAtom, activeSectionIdxAtom } from '../recoil/atoms';
import { studentList } from '../recoil/selectors/students';
import cloneDeep from 'lodash.clonedeep';

const EditableStudentName = ({ id }) => {
  const [editing, setEditing] = useState(false);
  const students = useRecoilValue(studentList);
  const idx = useRecoilValue(activeSectionIdxAtom);
  const setData = useSetRecoilState(userDataAtom);

  const name = students[id].name;

  const formCss = css`
    display: inline-block;
    padding-left: 1rem;
  `;

  const nameCss = css`
    display: inline-block;
    font-family: inherit;
    text-align: left;
    font-size: 1.2rem;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    padding: 3px;
    background-color: transparent;

    &[disabled] {
      color: black;
    }
  `;

  const editingCss = css`
    border: 2px solid ${colors.tertiary};
  `;

  const notEditingCss = css``;

  const handleChange = (e) => {
    setData((prev) => {
      const next = cloneDeep(prev);
      next.GroupUsSections[idx].section_info.students[id].name = e.target.value;

      return next;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <form css={formCss} onSubmit={handleSubmit}>
      <input
        type="text"
        css={[nameCss, editing ? editingCss : notEditingCss]}
        value={name}
        onChange={handleChange}
        maxLength="50"
        size={Math.max(name.length, 20)}
        placeholder="Hey! I need a name!"
        onFocus={() => setEditing(true)}
        onBlur={() => setEditing(false)}
        readOnly={!editing}
      />
    </form>
  );
};

export default EditableStudentName;
