/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/core';

const containerCss = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const groupCss = css`
  width: 150px;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  text-align: center;
`;

const studentCss = css`
  margin-bottom: 5px;
  font-size: 1.2rem;
`;

const GroupList = ({ groups, students }) => {
  if (!groups) {
    return null;
  }

  return (
    <section id="present-group">
      <h2>Groups</h2>
      <div css={containerCss}>
        {groups.map((group) => {
          return (
            <div css={groupCss} key={group}>
              {group.map((student) => {
                return (
                  <div css={studentCss} key={student}>
                    {students[student].name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GroupList;
