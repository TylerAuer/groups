/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  genListAtom,
  activeGenIdxAtom,
  studentListAtom,
} from '../recoil/atoms';
import { EXTRA_OPTIONS } from '../constants/extraOptions';
import { formatRelative } from 'date-fns';
import Bar from './Bar';
import Pill from './Pill';
import GenerationControls from './GenerationControls';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const GenerationList = () => {
  const [genList, setGenList] = useRecoilState(genListAtom);
  const [activeGenIdx, setActiveGenIdx] = useRecoilState(activeGenIdxAtom);
  const studentCount = useRecoilValue(studentListAtom).length;

  // Puts generations in reverse chronological order
  const gens = [...genList].reverse();

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
  if (studentCount && genList.length) {
    title = headerWithTitle;
  } else if (studentCount) {
    title = headerJustControls;
  }

  const handleDeleteGen = (id) => {
    const updatedGenState = genList.slice();
    const updatedGen = { ...updatedGenState[id], deleted: true };
    updatedGenState[id] = updatedGen;

    setGenList(updatedGenState);
  };

  return (
    <section id="list-of-groupings">
      {title}
      {gens
        .filter((g) => !g.deleted)
        .map((g) => {
          const date = formatRelative(
            new Date(g.date_created * 1000),
            new Date()
          );

          return (
            <div
              css={barContainerCss}
              key={g.id}
              onClick={() => setActiveGenIdx(g.id)}
            >
              <Bar highlight={g.id === activeGenIdx}>
                <div>
                  {`${g.students} students`}
                  <Pill color="grey" text={`${g.group_size} per group`} />
                  <Pill color="grey" text={EXTRA_OPTIONS[g.extras].name} />
                  <span css={dateCss}>{date}</span>
                </div>
                <div>
                  <TextOnlyBtn
                    onClick={() => handleDeleteGen(g.id)}
                    text="Delete"
                  />
                </div>
              </Bar>
            </div>
          );
        })}
    </section>
  );
};

export default GenerationList;
