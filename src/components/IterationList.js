import React from 'react';
import Bar from './Bar';
import { formatRelative } from 'date-fns';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const IterationList = ({ setShownIter, iterations }) => {
  return (
    <section id="list-of-groupings">
      <h2>Generations</h2>
      {iterations.map((g) => {
        const date = formatRelative(
          new Date(g.date_created * 1000),
          new Date()
        );

        return (
          <Bar key={g.id}>
            <div>Generated {date}</div>
            <div>
              <TextOnlyBtn onClick={() => setShownIter(g.id)} text="Groups" />
              <TextOnlyBtn onClick={null} text="Delete" />
            </div>
          </Bar>
        );
      })}
    </section>
  );
};

export default IterationList;
