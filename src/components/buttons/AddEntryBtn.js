/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const LargeBtn = ({ text, onClick }) => {
  const btnCss = css`
    padding: 0.75rem 1rem;
    background-color: white;
    color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    border-radius: 5px;
    outline: none;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:focus {
      background-color: ${colors.secondary};
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

export default LargeBtn;
