/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {
  userDataAtom,
  checkingForUserAtom,
  isSignedInAtom,
} from '../recoil/atoms';
import logo from '../img/logo-450.png';
import SaveTracker from './SaveTracker';

const Header = () => {
  const checkingForUser = useRecoilValue(checkingForUserAtom);
  const isSignedIn = useRecoilValue(isSignedInAtom);
  const user = useRecoilValue(userDataAtom);

  const headerCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3rem;
  `;

  const leftCss = css`
    display: flex;
    align-items: baseline;

    & > img {
      width: 3rem;
      margin: auto 0.5rem auto 0;
    }

    & > h1 {
      display: inline-block;
      color: black;
    }

    & > .subtitle {
      display: inline-block;
      color: darkgrey;
      text-emphasis: italic;
      margin-left: 1rem;
    }
  `;

  const rightCss = css`
    display: flex;
    flex-direction: row;
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
      <Link css={leftCss} to="/">
        <img src={logo} alt="Group Us logo" />
        <h1>Group Us</h1>
        <div className="subtitle">Smart, random groupings</div>
      </Link>
      <div css={rightCss}>
        {!checkingForUser && isSignedIn && (
          <React.Fragment>
            <SaveTracker />
            <img
              css={profilePicCss}
              src={user.profile_pic}
              alt={user.first_name}
            />
          </React.Fragment>
        )}
        {!checkingForUser && !isSignedIn && <Link to="/login">Log In</Link>}
      </div>
    </header>
  );
};

export default Header;
