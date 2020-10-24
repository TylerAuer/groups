/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  isSignedIn as state,
  userImgLink as img,
  username,
} from '../../recoil/account';

const GoogleSignInBtn = () => {
  const [isSignedIn, setIsSignedIn] = useRecoilState(state);
  const [imgUrl, setImgUrl] = useRecoilState(img);
  const [name, setName] = useRecoilState(username);

  const btnCss = css`
    display: inline-block;
    vertical-align: middle;
  `;

  const onSuccess = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    setIsSignedIn(true);
    setImgUrl(profile.getImageUrl());
    setName(profile.getName());
  };

  const onFailure = (error) => {
    console.log(error);
  };

  useEffect(() => {
    window.gapi.signin2.render('header-sign-in', {
      scope: 'profile',
      width: 120,
      height: 36,
      longtitle: false,
      theme: 'light',
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  }, []);

  // useEffect(() => {
  //   window.onSignIn = (googleUser) => {
  //     const profile = googleUser.getBasicProfile();
  //     setIsSignedIn(true);
  //     setImgUrl(profile.getImageUrl());
  //     setName(profile.getName());
  //   };
  // }, [setImgUrl, setIsSignedIn, setName]);

  return <div css={btnCss} id="header-sign-in" />;
};

export default GoogleSignInBtn;
