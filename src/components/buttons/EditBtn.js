/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import EditIcon from '../../img/edit.svg';

const EditBtn = ({ onClick }) => {
  const btnCss = css`
    border: none;
    background-color: white;
    width: 0.8rem;
    height: 0.8rem;
    outline: none;
    background: url(${EditIcon});
    transform: translate(3px, -10px);

    &:hover,
    &:focus {
      cursor: pointer;
      filter: invert(8%) sepia(100%) saturate(7320%) hue-rotate(248deg)
        brightness(104%) contrast(143%);
    }

    &:active {
    }
  `;

  return <button css={btnCss} onClick={onClick} />;
};

export default EditBtn;
