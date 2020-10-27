/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import HeaderBtn from './buttons/HeaderBtn';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/users';
import useValidateUser from '../hooks/useValidateUser';

const Header = () => {
  const user = useRecoilValue(userState);
  const validateUser = useValidateUser();

  // Checks to be sure user is signed in
  validateUser();

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
      <div>
        <h1 css={titleCss}>Group Us</h1>
        <div css={subtitleCss}>Smart, random groupings</div>
      </div>
      <div css={rightCss}>
        <HeaderBtn text="FAQs" onClick={null} />
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
