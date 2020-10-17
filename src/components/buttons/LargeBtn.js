/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const btnCss = css`
  margin: 1rem;
  padding: 1rem 3rem;
  background-color: white;
  outline: none;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 5px 5px lightgrey;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const LargeBtn = ({ text, onClick }) => {
  return (
    <button css={btnCss} onClick={onClick}>
      {text}
    </button>
  );
};

export default LargeBtn;
