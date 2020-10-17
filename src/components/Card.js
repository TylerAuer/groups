/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const Card = (props) => {
  const cardCss = css`
    width: 150px;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid black;
    border-radius: 5px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  `;

  return (
    <div className="card" css={cardCss}>
      {props.children}
    </div>
  );
};

export default Card;
