/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useRecoilValue } from 'recoil';
import { historyGraph } from '../recoil/selectors/history';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import { colors } from '../constants/styles';

const HistoryCollapsing = () => {
  const [active, setActive] = useState(null);
  const history = Object.values(useRecoilValue(historyGraph));

  const styles = css`
    padding: 0.5rem;
    border-bottom: 1px solid ${colors.tertiary};

    & .name {
      font-size: 2rem;
      /* font-weight: bold; */
      padding: 0;
    }

    & .active {
      color: ${colors.tertiary};
      font-size: 3rem;

      &__add-on {
        color: ${colors.mediumgrey};
        margin-left: 1rem;
        display: inline-block;
        font-size: 1.8rem;
      }
    }
  `;

  return (
    <div id="history-collapsing">
      {history.map((person, i) => (
        <div css={styles} key={person.id}>
          <TextOnlyBtn
            text={person.name}
            onClick={() => setActive(active !== i ? i : null)}
            className={`name ${active === i ? 'active' : ''}`}
          />
          {active === i && (
            <div className="active__add-on">
              (Person - Times in Group with {person.name})
            </div>
          )}

          {active === i && (
            <HistoryForAPerson relations={Object.values(person.relations)} />
          )}
        </div>
      ))}
    </div>
  );
};

const HistoryForAPerson = ({ relations }) => {
  const styles = css`
    font-size: 1.8rem;

    & ul {
      list-style: none;
      padding-inline-start: 1rem;
      margin: 0;
      font-size: 1.8rem;
      border-left: 3px solid ${colors.tertiary};

      & li {
        margin: 0.5rem 0;
      }
    }
  `;

  let rows = relations
    .sort((a, b) => b.count - a.count)
    .map((r, i) => (
      <li key={i}>
        {r.name} - {r.count}
      </li>
    ));

  if (!rows.length) {
    rows = <li>This person has not yet been in a group with others.</li>;
  }

  return (
    <div css={styles}>
      <ul>{rows}</ul>
    </div>
  );
};

export default HistoryCollapsing;
