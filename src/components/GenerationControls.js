/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { groupSizeConfigAtom } from '../recoil/atoms';
import { studentList } from '../recoil/selectors/students';
import makeNewGen from '../grouping_algorithm/makeNewGen';
import ControlBtn from './buttons/ControlBtn';
import ExtrasDropdown from './ExtrasDropdown';

const GenerationControls = () => {
  const [groupSize, setGroupSize] = useRecoilState(groupSizeConfigAtom);
  const studentCount = useRecoilValue(studentList).length;
  const genNewGroups = makeNewGen();

  const controlsCss = css`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.8rem;
    font-weight: normal;

    & > :not(:last-child) {
      margin-right: 1.5rem;
    }
  `;

  const spacerCss = css`
    display: inline-block;
    width: 0.5rem;
  `;

  const onGroupSizeDecrement = () => {
    const newGroupSize = groupSize - 1;
    setGroupSize(newGroupSize < 2 ? 2 : newGroupSize);
  };

  const onGroupSizeIncrement = () => {
    const newGroupSize = groupSize + 1;

    setGroupSize(newGroupSize > studentCount ? studentCount : newGroupSize);
  };

  return (
    <div css={controlsCss} className="generation-controls">
      <div className="groups-size">
        <ControlBtn text="-" onClick={onGroupSizeDecrement} />
        <div css={spacerCss} />
        {groupSize} per group
        <div css={spacerCss} />
        <ControlBtn text="+" onClick={onGroupSizeIncrement} />
      </div>

      <ExtrasDropdown />

      <ControlBtn text="Generate" onClick={genNewGroups} />
    </div>
  );
};

export default GenerationControls;
