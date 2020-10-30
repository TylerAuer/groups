/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  userAtom,
  activeSectionIdxAtom,
  sectionListAtom,
} from '../recoil/atoms';
import ControlBtn from './buttons/ControlBtn';
import useMakeNewSection from '../hooks/useMakeNewSection';

const EditableSectionTitle = () => {
  const user = useRecoilValue(userAtom);
  const [editing, setEditing] = useState(false);
  const [sections, setSections] = useRecoilState(sectionListAtom);
  const [sectionIdx, setSectionIdx] = useRecoilState(activeSectionIdxAtom);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const makeNewSection = useMakeNewSection();

  const parentCss = css`
    position: relative;
  `;

  const titleAndToggleContainerCss = css`
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

  const dropdownTitleCss = css`
    text-align: center;
    background-color: ${colors.tertiary};
    font-size: 1.8rem;
    color: white;
    padding: 1rem 0;
    font-weight: bold;
  `;

  const dropdownCss = css`
    position: absolute;
    top: 5rem;
    width: 70%;
    margin: 0 50%;
    transform: translate(-50%, 0%);
    z-index: 1000;
    background: white;
    color: black;
    border: 3px solid ${colors.tertiary};
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;

    & ul {
      list-style: none;
      font-size: 1.4rem;
      list-style-position: outside;
      padding: 0;
      margin: 0;
    }

    & li {
      padding: 1rem;
      margin: 0;
      color: ${colors.darkgrey};
    }

    & li:not(:last-child) {
      border-bottom: 1px solid black;
    }

    & li:hover {
      cursor: pointer;
      background-color: ${colors.lightgrey};
    }
  `;

  const currentMarkerCss = css`
    display: inline-block;
    height: 1rem;
    width: 1rem;
    background-color: ${colors.tertiary};
    border-radius: 50%;
    margin-right: 0.5rem;
  `;

  const title = sections ? sections[sectionIdx].name : 'Title';

  const handleChange = (e) => {
    // // Copy section, rename
    const renamedSection = {
      ...sections[sectionIdx],
      name: e.target.value,
    };

    setSections((old) => [
      ...old.slice(0, sectionIdx),
      renamedSection,
      ...old.slice(sectionIdx + 1),
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <div css={parentCss}>
      <div css={titleAndToggleContainerCss}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            css={[titleCss, editing ? editingCss : notEditingCss]}
            value={title}
            onChange={handleChange}
            maxLength="50"
            size={Math.max(title.length, 20)}
            placeholder="Add a Section Title"
            onFocus={() => setEditing(true)}
            onBlur={() => setEditing(false)}
            readOnly={!editing}
          />
        </form>
        <ControlBtn text="+" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      {isMenuOpen && (
        <div css={dropdownCss}>
          <div css={dropdownTitleCss}>Switch Sections</div>
          <ul>
            <li onClick={makeNewSection}>&#43; Create new section</li>
            {sections.map((section, i) => (
              <li
                key={i}
                onClick={() => {
                  setSectionIdx(i);
                }}
              >
                {i === sectionIdx && <div css={currentMarkerCss} />}{' '}
                {section.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EditableSectionTitle;
