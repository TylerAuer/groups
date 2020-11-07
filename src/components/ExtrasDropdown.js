/** @jsx jsx */
import { useState, useRef } from 'react';
import { css, jsx } from '@emotion/core';
import { useRecoilState } from 'recoil';
import { extrasConfigAtom } from '../recoil/atoms';
import { EXTRA_OPTIONS } from '../constants/extraOptions';
import { colors } from '../constants/styles';
import useClickOutsideListener from '../hooks/useClickOutsideListener';
import ControlBtn from './buttons/ControlBtn';

const ExtrasDropdown = () => {
  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useRecoilState(extrasConfigAtom);
  const ref = useRef(null);
  useClickOutsideListener(ref, () => setOpen(false));

  const dropdownContainerCss = css`
    position: relative;

    & button {
      min-width: 10rem;
    }
  `;

  const dropdownCss = css`
    position: absolute;
    z-index: 1000;
    background-color: ${colors.tertiary};
    margin-top: 5px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    width: 25rem;
    right: 0;

    & .dropdown-option {
      padding: 5px;
      margin: 2px;
      background-color: white;

      &:hover {
        background-color: ${colors.tertiary};
        cursor: pointer;
        color: white;
      }
    }

    & .option-title {
      font-size: 2rem;
      font-weight: bolder;
      line-height: 1.2;
    }

    & .option-desc {
      font-size: 1.4rem;
      font-style: italic;
      margin-top: 3px;
    }
  `;

  const onOptionClick = (selection) => {
    setOpen(false);
    setSetting(EXTRA_OPTIONS[selection]);
  };

  return (
    <div ref={ref} css={dropdownContainerCss}>
      <ControlBtn text={setting.name} onClick={() => setOpen(!open)} />
      <div
        css={dropdownCss}
        style={{
          visibility: `${open ? 'visible' : 'hidden'}`,
        }}
      >
        {Object.keys(EXTRA_OPTIONS).map((option) => {
          return (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => onOptionClick(option)}
            >
              <div className="option-title">{EXTRA_OPTIONS[option].name}</div>
              <div className="option-desc">{EXTRA_OPTIONS[option].desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExtrasDropdown;
