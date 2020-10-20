/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';

const Bar = ({ children, highlight }) => {
  const barCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    border: 2px solid grey;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;

    font-size: 1.2rem;
  `;

  const highlightCss = css`
    border-color: ${colors.tertiary};
  `;

  return <div css={[barCss, highlight ? highlightCss : '']}>{children}</div>;
};

export default Bar;
