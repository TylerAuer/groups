/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import LargeBtn from './buttons/LargeBtn';

const titleCss = css`
  text-align: center;
`;

const btnListCss = css`
  display: flex;
  justify-content: center;
`;

const Controls = ({ title }) => {
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
