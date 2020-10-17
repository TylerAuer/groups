/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const btnCss = css`
  background-color: white;
  border: none;
  font-size: 1.2rem;
  padding: 0.25rem;
  outline: none;

  &:hover,
  &:focus {
    color: blue;
    cursor: pointer;
  }

  &:active {
    color: red;
  }
`;

const ControlBtn = ({ text, onClick }) => {
  return (
    <button css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default ControlBtn;
