/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../../constants/styles';
import { useRecoilState } from 'recoil';
import {
  isSignedIn as state,
  userImgLink as img,
  username,
} from '../../recoil/account';

const GoogleSignOutBtn = () => {
  const [isSignedIn, setIsSignedIn] = useRecoilState(state);
  const [imgUrl, setImgUrl] = useRecoilState(img);
  const [name, setName] = useRecoilState(username);

  const profileBtnCss = css`
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 50%;

    & img {
      display: inline-block;
      vertical-align: middle;
      height: 3rem;
      border-radius: 50%;
      border: 2px solid ${colors.tertiary};
      padding: 3px;
      transition: 0.3s ease-in-out;
    }

    & img:hover {
      border-radius: 40%;
    }
  `;

  const handleSignOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setIsSignedIn(false);
      setImgUrl(null);
      setName(null);
    });
  };

  return (
    <button css={profileBtnCss} onClick={handleSignOut}>
      <img src={imgUrl} alt={name} />
    </button>
  );
};

export default GoogleSignOutBtn;
