/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import {
  isSignedIn as state,
  userImgLink as img,
  username,
  userIdToken,
} from '../../recoil/users';

const GoogleSignInBtn = () => {
  const setIsSignedIn = useSetRecoilState(state);
  const setImgUrl = useSetRecoilState(img);
  const setName = useSetRecoilState(username);
  const setIdToken = useSetRecoilState(userIdToken);

  const btnCss = css`
    display: inline-block;
    vertical-align: middle;
  `;

  const onSuccess = async (googleUser) => {
    const profile = await googleUser.getBasicProfile();
    setIsSignedIn(true);
    setImgUrl(profile.getImageUrl());
    setName(profile.getName());

    const idToken = await googleUser.getAuthResponse().id_token;
    setIdToken(idToken);

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ idToken: idToken }),
    });
    const text = await res.text();

    console.log(text);
  };

  const onFailure = (error) => {
    console.log(error);
  };

  useEffect(() => {
    window.gapi.signin2.render('header-sign-in', {
      scope: 'profile',
      width: 100,
      height: 36,
      longtitle: false,
      theme: 'light',
      onsuccess: onSuccess,
      onfailure: onFailure,
    });
  }, []);

  return <div css={btnCss} id="header-sign-in" />;
};

export default GoogleSignInBtn;
