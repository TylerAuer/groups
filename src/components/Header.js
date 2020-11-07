/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import logo from '../img/logo-450.png';
import AccountHeader from './AccountHeader';

const Header = () => {
  const headerCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3rem;

    @media (max-width: 400px) {
      align-items: center;
    }
  `;

  const leftCss = css`
    display: flex;
    align-items: baseline;

    & > img {
      width: 6rem;
      margin: auto 0.5rem auto 0;

      @media (max-width: 400px) {
        width: 8rem;
      }
    }

    & > h1 {
      display: inline-block;
      color: black;

      @media (max-width: 400px) {
        display: none;
      }
    }

    & > .subtitle {
      display: inline-block;
      color: darkgrey;
      text-emphasis: italic;
      margin-left: 1rem;
      font-size: 1.8rem;

      @media (max-width: 800px) {
        display: none;
      }
    }
  `;

  const rightCss = css`
    display: flex;
    flex-direction: row;
    margin-left: auto;
    display: inline-block;
  `;

  return (
    <header css={headerCss}>
      <Link css={leftCss} to="/">
        <img src={logo} alt="Group Us logo" />
        <h1>Group Us</h1>
        <div className="subtitle">Smart, random groupings</div>
      </Link>
      <div css={rightCss}>
        <AccountHeader />
      </div>
    </header>
  );
};

export default Header;
