/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { activeSectionIdxAtom, userDataAtom } from '../recoil/atoms';
import { sectionList } from '../recoil/selectors/sections';
import cloneDeep from 'lodash.clonedeep';

const EditableSectionTitle = () => {
  // Component State
  const [editing, setEditing] = useState(false);

  // App state
  const idx = useRecoilValue(activeSectionIdxAtom);
  const setData = useSetRecoilState(userDataAtom);
  const sections = useRecoilValue(sectionList);

  const parentCss = css`
    position: relative;
    margin: 3rem auto;

    & button {
      margin: 1rem auto;
      display: block;
    }
  `;

  const titleAndToggleContainerCss = css`
    display: flex;
    justify-content: center;
    text-align: center;
  `;

  const titleCss = css`
    font-family: inherit;
    text-align: center;
    font-size: 3.6rem;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    margin: 0 1rem;
    background-color: transparent;

    &[disabled] {
      color: black;
    }
  `;

  const editingCss = css`
    border: 2px solid ${colors.tertiary};
  `;

  const notEditingCss = css``;

  const title = sections[idx].section_info.name;

  const handleTitleChange = (e) => {
    setData((prev) => {
      const next = cloneDeep(prev);
      next.GroupUsSections[idx].section_info.name = e.target.value;
      next.GroupUsSections[idx].section_info.version =
        next.GroupUsSections[idx].section_info.version + 1;

      return next;
    });
  };

  const handleTitleBlur = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div css={parentCss}>
      <div css={titleAndToggleContainerCss}>
        <form onSubmit={handleTitleBlur}>
          <input
            type="text"
            css={[titleCss, editing ? editingCss : notEditingCss]}
            value={title}
            onChange={handleTitleChange}
            maxLength="50"
            size={Math.max(title.length, 20)}
            placeholder="Add a Section Title"
            onFocus={() => setEditing(true)}
            onBlur={() => setEditing(false)}
            readOnly={!editing}
          />
        </form>
      </div>
    </div>
  );
};

export default EditableSectionTitle;
