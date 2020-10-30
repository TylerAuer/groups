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

  const handleDeleteGen = (idx) => {
    let newIdx;
    if (newIdx === idx) {
      // Deleting the generation currently being shown, so show no groups
      newIdx = null;
    } else if (idx < activeGenIdx) {
      // Deleting a generation before the one currently being show
      // So must decrement the idx in order to keep reference to correct groups
      newIdx = activeGenIdx - 1;
    } else {
      // Deleting generation after the one being shown so no change in idx being
      // shown
      newIdx = activeGenIdx;
    }
    setActiveGenIdx(newIdx);
    setGenList((prev) => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
  };

  return (
    <section id="list-of-groupings">
      {title}
      {genList.map((gen, idx) => {
        const date = formatRelative(
          new Date(gen.date_created * 1000),
          new Date()
        );

        return (
          <div
            css={barContainerCss}
            key={idx}
            onClick={() => setActiveGenIdx(idx)}
          >
            <Bar highlight={idx === activeGenIdx}>
              <div>
                {`${gen.students} students`}
                <Pill color="grey" text={`${gen.group_size} per group`} />
                <Pill color="grey" text={EXTRA_OPTIONS[gen.extras].name} />
                <span css={dateCss}>{date}</span>
              </div>
              <div>
                <TextOnlyBtn
                  onClick={() => handleDeleteGen(idx)}
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
