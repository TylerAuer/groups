/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilValue } from 'recoil';
import { historyGraph } from '../recoil/selectors/history';
import { genList } from '../recoil/selectors/generations';
import { colors } from '../constants/styles';
import left from '../img/icons/left-arrow.svg';
import down from '../img/icons/down-arrow.svg';
import downAndLeft from '../img/icons/down-and-left-arrow.svg';

const History = () => {
  const history = useRecoilValue(historyGraph);
  const gens = useRecoilValue(genList);

  if (!gens.length) return null;

  const matrixCss = css`
    font-size: 1.4rem;
    margin-top: 2rem;
    /* overflow: scroll; */

    & .row {
      display: flex;
      justify-content: flex-start;
      text-align: right;
      align-items: center;
    }

    & .arrow {
      width: 2rem;
      border-right: 2px solid transparent;
      border-top: 2px solid transparent;

      & img {
        width: 2rem;
        height: auto;
        margin: auto;
        padding-left: 3px;
        padding-bottom: 1px;
      }
    }

    & .name {
      font-size: 1.2rem;
      vertical-align: sub;
      transform-origin: bottom left;
      transform: translate(-4px, -8px) rotate(-30deg);
    }

    & .cell {
      width: 2rem;
      font-size: 1.2rem;
      text-align: center;
      padding: 8px 0;
      border-right: 2px solid ${colors.mediumgrey};
      border-top: 2px solid ${colors.mediumgrey};
    }

    & .first-cell-of-row {
      border-left: 2px solid ${colors.mediumgrey};
    }

    & .first-cell-of-column {
      border-bottom: 2px solid ${colors.mediumgrey};
    }

    & .shaded-row > .cell {
      /* Can be used to shade alternating rows */
    }

    & .shaded-column {
      background-color: ${colors.tertiaryVeryLight};
    }
  `;

  const chart = [];

  // Iterates over each student
  const ids = Object.keys(history);
  const countOfStudents = ids.length;
  ids.forEach((id) => {
    id = parseInt(id);

    let arrow;
    if (id === 0) {
      arrow = <img src={down} alt="down arrow" />;
    } else if (id === countOfStudents - 1) {
      arrow = <img src={left} alt="down arrow" />;
    } else {
      arrow = <img src={downAndLeft} alt="down arrow" />;
    }

    const countElems = [];

    // Iterates over each student with an ID less than the current student in
    // descending order
    for (let i = 0; i < id; i++) {
      const timesGroupedWith = history[id].relations[i]
        ? history[id].relations[i].count
        : '0';

      countElems.push(
        <div
          key={`${id}-${i}`}
          className={`
          cell ${i === 0 ? 'first-cell-of-row' : ''} 
          ${id === countOfStudents - 1 ? 'first-cell-of-column' : ''} 
          ${i % 2 === 1 ? 'shaded-column' : ''}
          `}
        >
          {timesGroupedWith}
        </div>
      );
    }

    countElems.push(
      <div key={id} className="arrow">
        {arrow}
      </div>
    );

    chart.push(
      <div className={`row ${id % 2 === 0 ? 'shaded-row' : ''}`} key={id}>
        {countElems}
        <div className="name">{history[id].name}</div>
      </div>
    );
  });

  // Each row shows all students with an ID < their id.
  // After the name it should list a count of the times they've been with
  // each other ID less than theirs in descending order
  // Each row needs a fixed width (should hold 4 digits?)

  return (
    <section>
      <h2>History</h2>
      <div css={matrixCss}>{chart}</div>
    </section>
  );
};

export default History;
