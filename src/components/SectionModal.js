/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { Modal } from 'react-responsive-modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userDataAtom, activeSectionIdxAtom } from '../recoil/atoms';
import { sectionList } from '../recoil/selectors/sections';
import useMakeNewSection from '../hooks/useMakeNewSection';
import ControlBtn from './buttons/ControlBtn';
import Pill from './Pill';
import 'react-responsive-modal/styles.css';

const SectionModal = ({ isOpen, close }) => {
  const userData = useRecoilValue(userDataAtom);
  const sections = useRecoilValue(sectionList);
  const makeNewSection = useMakeNewSection();

  const modalContentCss = css`
    & h2 {
      text-align: center;
      margin-bottom: 2rem;
    }

    & hr {
      margin: 0 auto;
      border: none;
      border-top: 2px solid ${colors.tertiary};
    }

    & button {
      margin: 2rem auto;
      display: block;
    }
  `;

  const handleNewSection = () => {
    makeNewSection();
    close();
  };

  return (
    <Modal
      styles={{
        modal: { width: '48rem', borderRadius: '5px', padding: '1.5rem' },
      }}
      open={isOpen}
      onClose={close}
      center
    >
      <div css={modalContentCss}>
        <h2>{userData.first_name}'s Sections</h2>
        {sections.map((s, i) => (
          <SectionInList key={s.id} data={s} index={i} close={close} />
        ))}
        <ControlBtn text="Create a new section" onClick={handleNewSection} />
      </div>
    </Modal>
  );
};

const SectionInList = ({ data, index, close }) => {
  const [idx, setIdx] = useRecoilState(activeSectionIdxAtom);
  const isActive = index === idx;

  const sectionInListCss = css`
    display: flex;
    justify-content: left;
    margin-right: 2rem;
    align-items: baseline;
    border: 2px solid transparent;
    border-radius: 3px;
    padding: 5px;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover,
    &:focus {
      border-color: ${colors.tertiary};
    }

    & .active {
      visibility: ${isActive ? 'visible' : 'hidden'};
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      background-color: ${colors.tertiary};
      margin-right: 1rem;
      transform: translateY(2px);
    }

    & .index {
      margin-right: 1rem;
      font-weight: ${isActive ? 'bold' : 'normal'};
    }

    & .name {
      font-weight: ${isActive ? 'bold' : 'normal'};
    }

    & .spacer {
      flex-grow: 1;
    }
  `;

  const handleSelectSection = () => {
    setIdx(index);
    close();
  };

  return (
    <div css={sectionInListCss} onClick={handleSelectSection}>
      <div className="active" />
      <div className="index">{index + 1}</div>
      <div className="name">{data.section_info.name}</div>
      <Pill
        text={`${data.section_info.students.length} people`}
        color="darkgrey"
      />
      <Pill
        text={`${data.section_info.generations.length} generations`}
        color="darkgrey"
      />
      <div className="spacer" />
      <div>Trash</div>
    </div>
  );
};

export default SectionModal;
