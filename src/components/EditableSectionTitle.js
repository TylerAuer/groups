/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { useRecoilState } from 'recoil';
import { activeSectionId, sectionList } from '../recoil/section';

// https://stackoverflow.com/questions/42167704/how-can-i-make-a-number-become-editable-onclick-in-react

const EditableSectionTitle = () => {
  const containerCss = css`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 3rem;
  `;

  const titleCss = css`
    font-family: inherit;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;

    &[disabled] {
      color: black;
    }
  `;

  const editingCss = css`
    border: 2px solid ${colors.tertiary};
  `;

  const notEditingCss = css``;

  const [editing, setEditing] = useState(false);
  const [sections, setSections] = useRecoilState(sectionList);
  const [id, setId] = useRecoilState(activeSectionId);

  const title = sections[id].name;

  const handleChange = (e) => {
    // Copy section, rename
    const newSection = { ...sections[id] };
    newSection.name = e.target.value;

    // Copy section list, past in new section with new name, update state
    const newSectionList = sections.slice();
    newSectionList[id] = newSection;
    setSections(newSectionList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div css={containerCss}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          css={[titleCss, editing ? editingCss : notEditingCss]}
          value={title === ' ' ? '' : title}
          onChange={handleChange}
          maxLength="50"
          size={Math.max(title.length, 20)}
          placeholder="Add a Section Title"
          onFocus={() => setEditing(true)}
          onBlur={() => setEditing(false)}
          readOnly={!editing}
        />
      </form>
    </div>
  );
};

export default EditableSectionTitle;
