/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import { generationState, activeGenerationId } from '../recoil/generation';
import { countOfStudents } from '../recoil/student';
import { EXTRA_OPTIONS } from '../constants/extraOptions';
import { formatRelative } from 'date-fns';
import Bar from './Bar';
import Pill from './Pill';
import GenerationControls from './GenerationControls';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const GenerationList = () => {
  const genState = useRecoilValue(generationState);
  const studentCount = useRecoilValue(countOfStudents);
  const [active, setActive] = useRecoilState(activeGenerationId);

  // Puts generations in reverse chronological order
  const generations = [...genState].reverse();

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

  const headerWithTitleCss = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;

  const headerJustControlsCss = css`
    display: flex;
    justify-content: center;

    & > div {
      flex-direction: column-reverse;

      & > div,
      & > button {
        margin-bottom: 1rem;
      }

      & > :not(:last-child) {
        margin-right: 0;
      }
    }
  `;

  const headerWithTitle = (
    <h2 css={headerWithTitleCss}>
      Generations <GenerationControls />
    </h2>
  );

  const headerJustControls = (
    <div css={headerJustControlsCss}>
      <GenerationControls />
    </div>
  );

  let title = null;

  if (studentCount && genState.length) {
    title = headerWithTitle;
  } else if (studentCount) {
    title = headerJustControls;
  }

  return (
    <section id="list-of-groupings">
      {title}
      {generations.map((g) => {
        const date = formatRelative(
          new Date(g.date_created * 1000),
          new Date()
        );

        const borderColor = g.id === active ? colors.tertiary : 'inherit';

        return (
          <div
            css={barContainerCss}
            key={g.id}
            onClick={() => setActive(g.id)}
            style={{
              borderColor: borderColor,
            }}
          >
            <Bar>
              <div>
                {`${g.students} students`}
                <Pill color="grey" text={`${g.group_size} per group`} />
                <Pill color="grey" text={EXTRA_OPTIONS[g.extras].name} />
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
