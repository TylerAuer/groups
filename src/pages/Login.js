/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { isSignedInAtom } from '../recoil/atoms';
import useVerifyUser from '../hooks/useVerifyUser';
import GoogleAuthBtn from '../components/buttons/GoogleAuthBtn';
import MediumBtn from '../components/buttons/MediumBtn';
import CenteredAndBackground from '../components/CenteredAndBackground';
import LogoAndTitle from '../components/LogoAndTitle';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const setIsSignedIn = useSetRecoilState(isSignedInAtom);
  const verifyUser = useVerifyUser();

  // Redirect to app if already logged in
  useEffect(() => {
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            text="Try Without Saving Data"
            onClick={() => {
              setIsSignedIn(false);
            }}
          />
        </Link>
      </div>
    </CenteredAndBackground>
  );
};

export default LoginPage;
