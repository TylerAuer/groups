/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilValue } from 'recoil';
import { activeGroups } from '../recoil/selectors/groups';
import Card from './Card';

const GroupList = () => {
  const groups = useRecoilValue(activeGroups);

  if (!groups || !groups.length) {
    return null;
  }

  const containerCss = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const studentCss = css`
    margin-bottom: 5px;
    font-size: 2rem;
  `;

  return (
    <section id="present-group">
      <h2>Groups</h2>
      <div css={containerCss}>
        {groups.map((group) => (
          <Card key={group}>
            {group.map((student, idx) => (
              <div css={studentCss} key={idx}>
                {student}
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default GroupList;
