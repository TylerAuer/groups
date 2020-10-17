import React from 'react';
import Bar from './Bar';
import { formatRelative } from 'date-fns';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const GroupingList = ({ groupings }) => {
  return (
    <section id="list-of-groupings">
      <h2>Groupings</h2>
      {groupings.map((g) => {
        const date = formatRelative(
          new Date(g.date_created * 1000),
          new Date()
        );

        return (
          <Bar key={g.id}>
            <div>Generated {date}</div>
            <div>
              <TextOnlyBtn onClick={null} text="Groups" />
              <TextOnlyBtn onClick={null} text="Delete" />
            </div>
          </Bar>
        );
      })}
    </section>
  );
};

export default GroupingList;
