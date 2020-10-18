/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilValue } from 'recoil';
import { activeGroups } from '../recoil/generation';
import { studentState } from '../recoil/student';
import Card from './Card';

const GroupList = () => {
  const groups = useRecoilValue(activeGroups);
  const students = useRecoilValue(studentState);

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
        {groups.map((group) => {
          return (
            <Card key={group}>
              {group.map((student) => {
                return (
                  <div css={studentCss} key={student}>
                    {students[student].name}
                  </div>
                );
              })}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default GroupList;
