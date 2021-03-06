/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const ControlBtn = ({ text, onClick }) => {
  const btnCss = css`
    position: relative;
    font-size: 2rem;
    padding: 6px 12px;

    border: none;
    outline: none;
    border-radius: 5px;

    color: white;
    background-color: ${colors.tertiary};
    transition: all 0.2s ease-in-out;
    min-width: 2.5rem;

    @media (max-width: 700px) {
      padding: 6px 8px;
    }

    @media (max-width: 450px) {
      padding: 4px 6px;
    }

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
