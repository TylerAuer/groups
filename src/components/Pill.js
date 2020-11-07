/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';

const Pill = ({ text, color, className = '' }) => {
  const pillCss = css`
    display: inline-block;
    padding: 0.5rem 1.2rem;
    font-size: 1.4rem;
    border-radius: 15px;
    margin-left: 1rem;
  `;

  let colorCss;
  switch (color) {
    case 'purple':
      colorCss = css`
        color: white;
        background-color: ${colors.tertiary};
      `;
      break;

    case 'grey':
    default:
      colorCss = css`
        color: black;
        background-color: ${colors.lightgrey};
      `;
  }

  return (
    <div className={className} css={[pillCss, colorCss]}>
      {text}
    </div>
  );
};

export default Pill;
