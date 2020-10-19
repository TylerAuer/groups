/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useRecoilState } from 'recoil';
import { extrasSetting } from '../recoil/generation';
import { EXTRA_OPTIONS } from '../constants/extraOptions';
import { colors } from '../constants/styles';
import ControlBtn from './buttons/ControlBtn';

const ExtrasDropdown = () => {
  const [open, setOpen] = useState(false);
  const [setting, setSetting] = useRecoilState(extrasSetting);

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
      font-size: 1.2rem;
      font-weight: bolder;
      line-height: 1.2;
    }

    & .option-desc {
      font-size: 0.8rem;
      font-style: italic;
      margin-top: 3px;
    }
  `;

  const onOptionClick = (selection) => {
    setOpen(false);
    setSetting(EXTRA_OPTIONS[selection]);
  };

  return (
    <div css={dropdownContainerCss}>
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
