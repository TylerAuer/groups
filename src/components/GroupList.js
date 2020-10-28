/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilValue } from 'recoil';
import { activeGroupsSelector } from '../recoil/selectors/activeGroups';
import Card from './Card';

const GroupList = () => {
  const groups = useRecoilValue(activeGroupsSelector);

  if (!groups) {
    return null;
  }

  const containerCss = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const studentCss = css`
    margin-bottom: 5px;
    font-size: 1.2rem;
  `;

  return (
    <section id="present-group">
      <h2>Groups</h2>
      <div css={containerCss}>
        {groups.map((group) => (
          <Card key={group}>
            {group.map((student) => (
              <div css={studentCss} key={student}>
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
