/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';

const Pill = ({ text, color }) => {
  const pillCss = css`
    display: inline-block;
    padding: 5px 12px;
    font-size: 0.8rem;
    border-radius: 15px;
    margin-left: 0.5rem;
  `;

  let colorCss;
  switch (color) {
    case 'grey':
    default:
      colorCss = css`
        color: ${colors.darkgrey};
        background-color: ${colors.lightgrey};
      `;
  }

  return <div css={[pillCss, colorCss]}>{text}</div>;
};

export default Pill;