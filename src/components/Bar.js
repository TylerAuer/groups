/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';

const Bar = ({ children, highlight, styles = css`` }) => {
  const barCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    border: 2px solid grey;
    border-radius: 5px;
    padding: 0.75rem 1.5rem;
    margin: 0.25rem 0;

    font-size: 2rem;
  `;

  const highlightCss = css`
    border-color: ${colors.tertiary};
  `;

  return (
    <div css={[barCss, highlight ? highlightCss : '', styles]}>{children}</div>
  );
};

export default Bar;
