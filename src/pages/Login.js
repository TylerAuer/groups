/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useSetRecoilState } from 'recoil';
import { isSavingActiveAtom } from '../recoil/atoms';
import GoogleAuthBtn from '../components/buttons/GoogleAuthBtn';
import MediumBtn from '../components/buttons/MediumBtn';
import CenteredAndBackground from '../components/CenteredAndBackground';
import LogoAndTitle from '../components/LogoAndTitle';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  // TODO: Check if signed in. If so, redirect to app
  const setSaving = useSetRecoilState(isSavingActiveAtom);

  const styles = css`
    & > h1 {
      text-align: center;
      margin-top: -1rem;
    }
  `;

  return (
    <CenteredAndBackground>
      <LogoAndTitle title={false} />
      <div css={styles}>
        <h1>Log In</h1>
        <p>
          <b>Group Us works best when you sign in.</b> You can have mulitple
          sections and we'll remember your students and groups the next time you
          visit. We'll never share or sell your data.
        </p>
        <GoogleAuthBtn />
        <p>
          You can try Group Us without an account, but your data will be lost
          when you leave the site or sign in.
        </p>
        <Link to="/app">
          <MediumBtn
            text="Don't Save my Data"
            onClick={() => {
              setSaving(false);
            }}
          />
        </Link>
      </div>
    </CenteredAndBackground>
  );
};

export default LoginPage;
