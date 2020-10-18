/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import HeaderBtn from './buttons/HeaderBtn';

const Header = () => {
  const headerCss = css`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3rem;
  `;

  const titleCss = css`
    display: inline-block;
  `;

  const subtitleCss = css`
    display: inline-block;
    color: darkgrey;
    text-emphasis: italic;
    margin-left: 1rem;
  `;

  const rightCss = css`
    margin-left: auto;
    display: inline-block;
  `;

  return (
    <header css={headerCss}>
      <div>
        <h1 css={titleCss}>Group Us</h1>
        <div css={subtitleCss}>Smart, random groupings</div>
      </div>
      <div css={rightCss}>
        <HeaderBtn text="About" onClick={null} />
        <HeaderBtn text="Sign In" onClick={null} />
      </div>
    </header>
  );
};

export default Header;
