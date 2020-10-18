/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Bar = (props) => {
  const barCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    border: 2px solid grey;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    margin: 0.5rem 0;

    font-size: 1.2rem;
  `;

  return <div css={barCss}>{props.children}</div>;
};

export default Bar;
