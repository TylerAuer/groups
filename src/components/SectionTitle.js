/** @jsx jsx */
import { activeSectionName } from '../recoil/section';
import { useRecoilValue } from 'recoil';
import { css, jsx } from '@emotion/core';

const SectionTitle = () => {
  const title = useRecoilValue(activeSectionName);

  const titleCss = css`
    text-align: center;
    font-size: 2rem;
  `;

  return (
    <section id="controls">
      <h2 css={titleCss}>{title}</h2>
    </section>
  );
};

export default SectionTitle;
