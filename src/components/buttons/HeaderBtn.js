/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const HeaderBtn = ({ text, onClick }) => {
  const btnCss = css`
    padding: 5px 1rem;
    background-color: white;
    outline: none;
    border: none;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;

    &:not(:last-of-type) {
      margin-right: 0.5rem;
    }

    &:hover,
    &:focus {
      cursor: pointer;
      color: ${colors.primary};
    }

    &:active {
      color: ${colors.secondary};
    }
  `;
  return (
    <button css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default HeaderBtn;
