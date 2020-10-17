/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import LargeBtn from './buttons/LargeBtn';
import EditIcon from './EditIcon';

const Controls = ({ title }) => {
  const [sectionName, setSectionname] = useState({ title });

  const titleCss = css`
    text-align: center;
  `;

  const btnListCss = css`
    display: flex;
    justify-content: center;
  `;

  return (
    <section id="controls">
      <h2 css={titleCss}>
        {title}
        <EditIcon />
      </h2>

      <div css={btnListCss}>
        <LargeBtn text="Generate" onClick={null} />
      </div>
    </section>
  );
};

export default Controls;
