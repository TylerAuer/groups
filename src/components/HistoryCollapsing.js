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
      font-size: 1.8rem;
      font-weight: bold;
      padding: 0;
    }
  `;

  return (
    <div id="history-collapsing">
      {history.map((person, i) => (
        <div css={styles} key={person.id}>
          <TextOnlyBtn
            text={person.name}
            onClick={() => setActive(active !== i ? i : null)}
            className="name"
          />
          {active === i && (
            <HistoryForAPerson relations={Object.values(person.relations)} />
          )}
        </div>
      ))}
    </div>
  );
};

const HistoryForAPerson = ({ relations }) => {
  const styles = css``;

  const rows = relations.map((r, i) => (
    <div css={styles} key={i}>
      {r.name} - {r.count}
    </div>
  ));

  return <div>{rows}</div>;
};

export default HistoryCollapsing;
