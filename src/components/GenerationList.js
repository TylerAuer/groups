import React, { useState } from 'react';
import { generationState, activeGenerationId } from '../recoil/generation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { formatRelative } from 'date-fns';
import Bar from './Bar';
import TextOnlyBtn from './buttons/TextOnlyBtn';
import AddBtn from './buttons/AddBtn';
import AddGeneration from './AddGeneration';

const GenerationList = () => {
  const [generations, setGenerations] = useRecoilState(generationState);
  const setActiveGenerationId = useSetRecoilState(activeGenerationId);
  const [addModal, setAddModal] = useState(false);

  return (
    <section id="list-of-groupings">
      <h2>
        Generations
        <AddBtn text="Add Student" onClick={() => setAddModal(true)} />
      </h2>
      <AddGeneration open={addModal} setOpen={setAddModal} />
      {generations.map((g) => {
        const date = formatRelative(
          new Date(g.date_created * 1000),
          new Date()
        );

        return (
          <Bar key={g.id}>
            <div>
              <TextOnlyBtn
                onClick={() => setActiveGenerationId(g.id)}
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
