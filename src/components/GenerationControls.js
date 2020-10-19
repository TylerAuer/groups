/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilState, useRecoilValue } from 'recoil';
import { groupSizeSetting } from '../recoil/generation';
import { countOfStudents } from '../recoil/student';
import ControlBtn from './buttons/ControlBtn';
import ExtrasDropdown from './ExtrasDropdown';

const GenerationControls = () => {
  const [groupSize, setGroupSize] = useRecoilState(groupSizeSetting);
  const students = useRecoilValue(countOfStudents);

  const controlsCss = css`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 1.2rem;
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

    setGroupSize(newGroupSize > students ? students : newGroupSize);
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
      <ControlBtn text="Generate" onClick={null} />
    </div>
  );
};

export default GenerationControls;
