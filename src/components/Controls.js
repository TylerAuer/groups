/** @jsx jsx */
import React, { useState } from 'react';
import { css, jsx } from '@emotion/core';
import EditBtn from './buttons/EditBtn';

const Controls = ({ title }) => {
  const [sectionName, setSectionname] = useState({ title });

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
