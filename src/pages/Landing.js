/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect } from 'react';
import useVerifyUser from '../hooks/useVerifyUser';
import LargeLinkBtn from '../components/buttons/LargeLinkBtn';
import CenteredAndBackground from '../components/CenteredAndBackground';
import LogoAndTitle from '../components/LogoAndTitle';

const LandingPage = () => {
  const verifyUser = useVerifyUser();

  // Redirect to app if already logged in
  useEffect(() => {
    verifyUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const styles = css`
    & > p > a {
      color: #97009f;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <CenteredAndBackground>
      <div css={styles}>
        <LogoAndTitle />
        <p>
          <b>Group Us</b> is a powerful tool that generates random groupings.
          You choose the size and how to handle extras, we'll do the rest!
        </p>
        <p>
          But, randomness isn't great when you get paired with the same person
          over-and-over again. That's why Group Us{' '}
          <b>tracks and minimizes repeated pairings</b>.
        </p>
        <p>
          <a
            href="http://peterliljedahl.com/wp-content/uploads/Building-Thinking-Classrooms-Feb-14-20151.pdf#page=16"
            alt="Summary of research on visibly random groupings"
          >
            Research
          </a>{' '}
          has found that people collobarate and learn more when repeatedly
          placed in groups that they trust are random. Use Group Us to as an
          easy routine for your classes or meeting.
        </p>
        <LargeLinkBtn to="/login" text="Start" />
      </div>
    </CenteredAndBackground>
  );
};

export default LandingPage;
