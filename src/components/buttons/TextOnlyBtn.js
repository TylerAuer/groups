/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const TextOnlyBtn = ({ text, onClick }) => {
  const btnCss = css`
    border: none;
    font-size: 1.8rem;
    padding: 1rem;
    outline: none;
    background-color: transparent;

    &:hover,
    &:focus {
      color: ${colors.tertiary};
      cursor: pointer;
    }
  `;

  return (
    <button css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default TextOnlyBtn;
