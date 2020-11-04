/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import circles from '../img/overlapping-circles.svg';

const CenteredAndBackground = (props) => {
  const pageCss = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f0ecf1;
    background-image: url(${circles});
    background-repeat: repeat;
    animation: 60s scroll infinite linear;

    @keyframes scroll {
      100% {
        background-position: -2400px -2400px;
      }
    }
  `;

  const centerCss = css`
    width: 40rem;
    max-width: 80%;
    z-index: 100;
    padding: 1rem;
    color: #373737;
    line-height: 1.6;
    font-size: 1.5rem;
    text-shadow: 2px 2px 6px white;
    margin-bottom: 20rem;
  `;
  return (
    <div css={pageCss}>
      <div css={centerCss}>{props.children}</div>
    </div>
  );
};

export default CenteredAndBackground;
