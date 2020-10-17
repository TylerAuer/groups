/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const AddBtn = ({ text, onClick }) => {
  const btnCss = css`
    position: relative;
    top: 3px;
    display: inline-block;
    padding: 0;

    margin-left: 0.5rem;

    border: 2px solid ${colors.secondary};
    outline: none;
    border-radius: 50%;

    color: ${colors.secondary};
    background-color: white;
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

  const circleCss = css`
    width: 2rem;
    height: 2rem;
    text-align: center;
    vertical-align: middle;
    font-size: 1.8rem;
  `;

  return (
    <button css={btnCss} onClick={onClick}>
      <div css={circleCss}>+</div>
    </button>
  );
};

export default AddBtn;
