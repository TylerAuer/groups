/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';

const GoogleAuthBtn = () => {
  const src = {
    normal: require('../../img/google/btn_google_signin_dark_normal_web@2x.png'),
    disabled: require('../../img/google/btn_google_signin_dark_disabled_web@2x.png'),
    focus: require('../../img/google/btn_google_signin_dark_focus_web@2x.png'),
    pressed: require('../../img/google/btn_google_signin_dark_pressed_web@2x.png'),
  };

  const [img, setImg] = useState(src.normal);

  const style = css`
    & img {
      margin: 0 auto;
      display: block;
      width: 15rem;
    }
  `;

  return (
    <div css={style}>
      <a href="/auth/google">
        <img
          src={img}
          alt="Sign In with Google"
          onMouseEnter={() => setImg(src.focus)}
          onMouseDown={() => setImg(src.pressed)}
          onMouseLeave={() => setImg(src.normal)}
        />
      </a>
    </div>
  );
};

export default GoogleAuthBtn;
