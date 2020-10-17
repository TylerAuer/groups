/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const ControlBtn = ({ text, onClick }) => {
  const btnCss = css`
    background-color: white;
    border: none;
    font-size: 1.2rem;
    padding: 0.25rem;
    outline: none;

    &:hover,
    &:focus {
      color: ${colors.primary};
      cursor: pointer;
    }

    &:active {
      color: red;
    }
  `;

  return (
    <button css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default ControlBtn;
