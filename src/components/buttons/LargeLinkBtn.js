/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const LargeLinkBtn = ({ to, text }) => {
  const btnCss = css`
    display: block;
    margin: 4rem auto;
    width: 12rem;
    font-size: 3rem;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 2rem 6rem;
    background: rgba(16, 16, 16, 0.6);
    font-weight: bolder;
    text-align: center;
    transition: 0.5s;
    text-decoration: none;
    text-shadow: none;
    color: white;

    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
      background: rgba(16, 16, 16, 1);
    }
  `;

  return (
    <Link css={btnCss} to={to}>
      {text}
    </Link>
  );
};

export default LargeLinkBtn;
