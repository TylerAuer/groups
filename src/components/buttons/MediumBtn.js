/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';

const MediumBtn = ({ text, onClick, className = '' }) => {
  const btnCss = css`
    display: block;
    position: relative;
    font-size: 2.6rem;
    font-weight: bold;
    padding: 0.75rem 3rem;
    border: none;
    outline: none;
    border-radius: 5px;

    color: white;
    background-color: rgba(218, 112, 214, 0.8);
    transition: all 0.2s ease-in-out;
    min-width: 2.5rem;
    margin: 1rem auto;

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
    <button className={className} css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default MediumBtn;
