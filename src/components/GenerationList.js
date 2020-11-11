/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import cloneDeep from 'lodash.clonedeep';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  userDataAtom,
  activeGenIdxAtom,
  activeSectionIdxAtom,
} from '../recoil/atoms';
import { genList } from '../recoil/selectors/generations';
import { studentList } from '../recoil/selectors/students';
import { EXTRA_OPTIONS } from '../constants/extraOptions';
import { formatRelative } from 'date-fns';
import Bar from './Bar';
import Pill from './Pill';
import GenerationControls from './GenerationControls';
import TextOnlyBtn from './buttons/TextOnlyBtn';

const GenerationList = () => {
  const [genIdx, setGenIdx] = useRecoilState(activeGenIdxAtom);
  const setData = useSetRecoilState(userDataAtom);
  const sectionIdx = useRecoilValue(activeSectionIdxAtom);
  const gens = useRecoilValue(genList);
  const studentCount = useRecoilValue(studentList).length;

  const barContainerCss = css`
    cursor: pointer;

    & > div:hover {
      border-color: ${colors.tertiary};
    }
  `;

  const dateCss = css`
    color: ${colors.mediumgrey};
    font-style: italic;
    font-size: 1.6rem;
    margin-left: 0.8rem;

    @media (max-width: 400px) {
      display: none;
    }
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
      flex-direction: row;
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
  if (studentCount && gens.length) {
    title = headerWithTitle;
  } else if (studentCount) {
    title = headerJustControls;
  }

  const handleDeleteGen = (clickedIdx) => {
    const warning =
      'Are you sure you want to delete this set of groups? This cannot be undone';

    if (!window.confirm(warning)) return;

    if (genIdx === clickedIdx) {
      // TODO: Fix bug where clicking on delete also clicks the bar

      // Deleting the generation currently being shown, so show no groups
      setGenIdx(null);
    } else if (clickedIdx < genIdx) {
      // Deleting a generation before the one currently being show
      // So must decrement the idx in order to keep reference to correct groups
      setGenIdx(genIdx - 1);
    }

    setData((prev) => {
      const next = cloneDeep(prev);
      next.GroupUsSections[sectionIdx].section_info.generations.splice(
        clickedIdx,
        1
      );

      next.GroupUsSections[sectionIdx].section_info.version =
        next.GroupUsSections[sectionIdx].section_info.version + 1;

      return next;
    });
  };

  return (
    <section id="list-of-groupings">
      {title}
      {gens.map((gen, idx) => {
        const date = formatRelative(
          new Date(gen.date_created * 1000),
          new Date()
        );

        return (
          <div css={barContainerCss} key={idx} onClick={() => setGenIdx(idx)}>
            <Bar highlight={genIdx === idx}>
              <div>
                {`${gen.students} people`}
                <Pill color="purple" text={`${gen.group_size} per group`} />
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
