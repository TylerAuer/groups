/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const ControlBtn = ({ text, onClick }) => {
  const btnCss = css`
    position: relative;
    font-size: 1.3rem;
    padding: 8px 15px;

    border: none;
    outline: none;
    border-radius: 5px;

    color: white;
    background-color: ${colors.tertiary};
    transition: all 0.2s ease-in-out;
    min-width: 2.5rem;

    &:hover,
    &:focus {
      background-color: ${colors.tertiary};
      color: white;
      cursor: pointer;
      box-shadow: 0 5px 5px lightgrey;
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(1px);
    }
  `;

  return (
    <button css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default ControlBtn;
