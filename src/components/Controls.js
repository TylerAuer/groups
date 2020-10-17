/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import LargeBtn from './buttons/LargeBtn';

const Controls = ({ title }) => {
  const titleCss = css`
    text-align: center;
  `;

  const btnListCss = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <section id="controls">
      <h2 css={titleCss}>{title}</h2>
      <div css={btnListCss}>
        <LargeBtn text="Generate" onClick={null} />
      </div>
    </section>
  );
};

export default Controls;
