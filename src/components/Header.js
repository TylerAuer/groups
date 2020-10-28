/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../recoil/atoms';

const Header = () => {
  const user = useRecoilValue(userAtom);

  const headerCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3rem;
  `;

  const titleCss = css`
    display: inline-block;
    color: black;
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

  const profilePicCss = css`
    vertical-align: middle;
    height: 3rem;
    border-radius: 50%;
    margin: 1rem;
    padding: 2px;
    border: 3px solid ${colors.tertiary};
  `;

  return (
    <header css={headerCss}>
      <Link to="/">
        <h1 css={titleCss}>Group Us</h1>
        <div css={subtitleCss}>Smart, random groupings</div>
      </Link>
      <div css={rightCss}>
        {user ? (
          <img
            css={profilePicCss}
            src={user.profile_pic}
            alt={user.first_name}
          />
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </div>
    </header>
  );
};

export default Header;
