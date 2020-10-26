/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilValue } from 'recoil';
import { isSignedIn as signInState } from '../recoil/users';
import HeaderBtn from './buttons/HeaderBtn';
import { Link } from 'react-router-dom';

const Header = () => {
  const isSignedIn = useRecoilValue(signInState);

  const headerCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3rem;
  `;

  const titleCss = css`
    display: inline-block;
  `;

  const subtitleCss = css`
    display: inline-block;
    color: darkgrey;
    text-emphasis: italic;
    margin-left: 1rem;
  `;

  const rightCss = css`
    margin-left: auto;
    display: inline-block;
  `;

  return (
    <header css={headerCss}>
      <div>
        <h1 css={titleCss}>Group Us</h1>
        <div css={subtitleCss}>Smart, random groupings</div>
      </div>
      <div css={rightCss}>
        <HeaderBtn text="FAQs" onClick={null} />
        <Link to="/login">Log In</Link>
      </div>
    </header>
  );
};

export default Header;
