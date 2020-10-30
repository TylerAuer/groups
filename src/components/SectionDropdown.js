/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useRecoilValue } from 'recoil';
import { activeSectionIdxAtom, sectionListAtom } from '../recoil/atoms';
import ControlBtn from './buttons/ControlBtn';

const SectionDropdown = () => {
  const [open, setOpen] = useState(true);
  const idx = useRecoilValue(activeSectionIdxAtom);
  const list = useRecoilValue(sectionListAtom);

  const containerCss = css`
    position: relative;
  `;

  const dropdownCss = css`
    position: absolute;
    border: 1px solid black;
    z-index: 1000;
    top: 5rem;
    right: 0;
    width: 30rem;
    background: white;
  `;

  return (
    <div css={containerCss}>
      <ControlBtn text="+" onClick={() => setOpen(!open)} />
      {open && (
        <div css={dropdownCss}>
          <ul>
            {list.map((section, i) => (
              <li key={i}>{section.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SectionDropdown;
