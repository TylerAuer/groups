/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import { colors } from '../constants/styles';
import circles from '../img/overlapping-circles.svg';

const StartBtn = () => {
  const btnCss = css`
    display: block;
    width: 60%;
    margin: 4rem auto;
    font-size: 2rem;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    background: rgba(16, 16, 16, 0.6);
    font-weight: bolder;
    text-align: center;
    transition: 0.5s;
    text-decoration: none;
    text-shadow: none;
    color: white;

    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
      width: 70%;
    }
  `;

  return (
    <Link css={btnCss} to="/app">
      Start
    </Link>
  );
};

const LandingPage = () => {
  const pageCss = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color: #f0ecf1;
    background-image: url(${circles});
    background-repeat: repeat;
    animation: 60s scroll infinite linear;

    @keyframes scroll {
      100% {
        background-position: -2400px -2400px;
      }
    }
  `;

  const welcomeCss = css`
    width: 40rem;
    max-width: 80%;
    z-index: 100;
    padding: 1rem;
    color: #373737;
    line-height: 1.6;
    font-size: 1.5rem;
    text-shadow: 2px 2px 6px white;

    & h1 {
      text-align: center;
      font-size: 5rem;
      line-height: 1;
      margin: 1rem;
    }
    & .subtitle {
      font-size: 1.2rem;
      text-align: center;
      line-height: 1;
      margin-bottom: 4rem;
    }
    & h2 {
      text-align: center;
      font-size: 1.7rem;
    }

    & > p > a {
      color: #97009f;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `;

  return (
    <div css={pageCss}>
      <div css={welcomeCss}>
        <h1>Group Us</h1>
        <div className="subtitle">Smart, random groupings</div>
        <p>
          <b>Group Us</b> is a powerful tool that generates random groupings.
          You choose the size and how to handle extras, we'll do the rest!
        </p>
        <p>
          But, randomness isn't great when you get paired with the same person
          over-and-over again. That's why Group Us tracks and minimizes repeated
          pairings.
        </p>
        <p>
          <a
            href="http://peterliljedahl.com/wp-content/uploads/Building-Thinking-Classrooms-Feb-14-20151.pdf#page=16"
            alt="Summary of research on visibly random groupings"
          >
            Research
          </a>{' '}
          has found that people collobarate and learn more when they know are
          grouped randomly. Use Group Us to make this an easy routine for your
          class or meeting.
        </p>
        <StartBtn />
      </div>
    </div>
  );
};

export default LandingPage;
