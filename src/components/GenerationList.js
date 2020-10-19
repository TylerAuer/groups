/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import {
  generationState,
  activeGenerationId,
  EXTRAS_OPTIONS,
} from '../recoil/generation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { formatRelative } from 'date-fns';
import Bar from './Bar';
import Pill from './Pill';
import GenerationControls from './GenerationControls';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const GenerationList = () => {
  const [generations, setGenerations] = useRecoilState(generationState);
  const [active, setActive] = useRecoilState(activeGenerationId);

  const barContainerCss = css`
    cursor: pointer;

    & > div:hover {
      border-color: ${colors.tertiary};
    }
  `;

  const dateCss = css`
    color: ${colors.mediumgrey};
    font-style: italic;
    font-size: 1rem;
    margin-left: 0.8rem;
  `;

  return (
    <section id="list-of-groupings">
      <h2
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        Generations <GenerationControls />
      </h2>

      {generations.map((g, index) => {
        const date = formatRelative(
          new Date(g.date_created * 1000),
          new Date()
        );

        const borderColor = g.id === active ? colors.tertiary : 'inherit';

        return (
          <div
            css={barContainerCss}
            onClick={() => setActive(g.id)}
            style={{
              borderColor: borderColor,
            }}
          >
            <Bar key={g.id}>
              <div>
                {`${g.students} students`}
                <Pill color="grey" text={`${g.group_size} per group`} />
                <Pill color="grey" text={EXTRAS_OPTIONS[g.extras].name} />
                <span css={dateCss}>{date}</span>
              </div>
              <div>
                <TextOnlyBtn onClick={null} text="Delete" />
              </div>
            </Bar>
          </div>
        );
      })}
    </section>
  );
};

export default GenerationList;
