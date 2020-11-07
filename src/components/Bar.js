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
    padding: 0.4rem 1.5rem;
    margin: 3px 0;
    font-size: 2rem;

    @media (max-width: 700px) {
      border-width: 1px;
    }
  `;

  const highlightCss = css`
    border-color: ${colors.tertiary};
  `;

  return (
    <div css={[barCss, highlight ? highlightCss : '', styles]}>{children}</div>
  );
};

export default Bar;
