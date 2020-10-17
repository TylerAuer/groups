/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const btnCss = css`
  margin-left: 0.5rem;
  background-color: white;
  border: none;
  font-size: 1rem;
  padding: 0.25rem;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

const TextOnlyBtn = ({ text, onClick }) => {
  return (
    <button css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default TextOnlyBtn;
