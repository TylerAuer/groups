/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import svg from '../img/edit.svg';

const EditIcon = (onClick) => {
  const svgCss = css`
    display: inline-block;
    height: 0.8rem;
    width: auto;
    transform: translate(5px, -10px);
  `;

  return <img css={svgCss} src={svg} alt="Edit" />;
};

export default EditIcon;
