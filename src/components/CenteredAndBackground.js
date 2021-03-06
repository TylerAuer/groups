/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import circles from '../img/overlapping-circles.svg';

const CenteredAndBackground = (props) => {
  const pageCss = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    top: 0;
    z-index: -10000;
    background-color: ${colors.grey_bg};
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
    width: 50rem;
    min-width: 40%;
    z-index: 100;
    padding: 1rem;
    color: #373737;
    line-height: 1.6;
    font-size: 2rem;
    text-shadow: 2px 2px 6px white;
  `;
  return (
    <div css={pageCss}>
      <div css={centerCss}>{props.children}</div>
    </div>
  );
};

export default CenteredAndBackground;
