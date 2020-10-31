/** @jsx jsx */
import { css, jsx } from '@emotion/core';

const LoginPage = () => {
  const containerCss = css`
    max-width: 40rem;
    padding: 3rem;
    margin: auto;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: middle;
  `;

  return (
    <section css={containerCss}>
      <h2>Log In</h2>
      <p>
        Sign into your Google Account to unlock the ability to save your data
        and groups.
      </p>
      <p>
        We'll never sell or share your data. Honestly, we aren't even really
        sure what we'd do with it.
      </p>

      <a href="auth/google">Login with Google</a>
    </section>
  );
};

export default LoginPage;
