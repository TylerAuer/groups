/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';
import img from '../img/logo-450.png';

const LogoAndTitle = ({ title = true, logo = true }) => {
  const styles = css`
    & > img {
      margin: -10px auto;
      height: 200px;
      width: auto;
      display: block;
    }
    & > h1 {
      text-align: center;
      font-size: 5rem;
      line-height: 1;
      margin: 1rem;
    }
    & > .subtitle {
      font-size: 1.2rem;
      text-align: center;
      line-height: 1;
      margin-bottom: 4rem;
    }
  `;

  return (
    <div css={styles}>
      {logo && <img src={img} alt="Group Us logo" />}
      {title && (
        <React.Fragment>
          <h1>Group Us</h1>
          <div className="subtitle">Smart, random groupings</div>
        </React.Fragment>
      )}
    </div>
  );
};

export default LogoAndTitle;
