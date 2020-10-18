/** @jsx jsx */
import { activeSectionName } from '../recoil/section';
import { useRecoilValue } from 'recoil';
import { css, jsx } from '@emotion/core';
import EditBtn from './buttons/EditBtn';

const Controls = () => {
  const title = useRecoilValue(activeSectionName);

  const titleCss = css`
    text-align: center;
    font-size: 2rem;
  `;

  return (
    <section id="controls">
      <h2 css={titleCss}>
        {title}
        <EditBtn />
      </h2>
    </section>
  );
};

export default Controls;
