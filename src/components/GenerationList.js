import React from 'react';
import { generationState, activeGenerationId } from '../recoil/generation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { formatRelative } from 'date-fns';
import Bar from './Bar';
import GenerationControls from './GenerationControls';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const GenerationList = () => {
  const [generations, setGenerations] = useRecoilState(generationState);
  const setActiveGenerationId = useSetRecoilState(activeGenerationId);

  return (
    <section id="list-of-groupings">
      <h2 style={{ display: 'flex', justifyContent: 'space-between' }}>
        Generations <GenerationControls />
      </h2>

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
