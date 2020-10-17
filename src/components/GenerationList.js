import React, { useState } from 'react';
import Bar from './Bar';
import { formatRelative } from 'date-fns';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import AddBtn from './buttons/AddBtn';
import AddGeneration from './AddGeneration';

const GenerationList = ({ setGeneration, generations }) => {
  const [addGeneration, setAddGeneration] = useState(false);

  return (
    <section id="list-of-groupings">
      <h2>
        Generations
        <AddBtn text="Add Student" onClick={() => setAddGeneration(true)} />
      </h2>
      <AddGeneration open={addGeneration} setOpen={setAddGeneration} />
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
