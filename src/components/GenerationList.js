import React from 'react';
import Bar from './Bar';
import { formatRelative } from 'date-fns';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const GenerationList = ({ setGeneration, generations }) => {
  return (
    <section id="list-of-groupings">
      <h2>Generations</h2>
      {generations.map((g) => {
        const date = formatRelative(
          new Date(g.date_created * 1000),
          new Date()
        );

        return (
          <Bar key={g.id}>
            <div>
              <TextOnlyBtn
                onClick={() => setGeneration(g.id)}
                text={`See Generation from ${date}`}
              />
            </div>
            <div>
              <TextOnlyBtn onClick={null} text="Delete" />
            </div>
          </Bar>
        );
      })}
    </section>
  );
};

export default GenerationList;
