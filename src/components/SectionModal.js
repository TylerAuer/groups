/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { Modal } from 'react-responsive-modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userDataAtom, activeSectionIdxAtom } from '../recoil/atoms';
import { sectionList } from '../recoil/selectors/sections';
import useMakeNewSection from '../hooks/useMakeNewSection';
import useDeleteSection from '../hooks/useDeleteSection';
import ControlBtn from './buttons/ControlBtn';
import Pill from './Pill';
import trash from '../img/icons/trash.png';
import 'react-responsive-modal/styles.css';

const SectionModal = ({ isOpen, close }) => {
  const userData = useRecoilValue(userDataAtom);
  const sections = useRecoilValue(sectionList);
  const makeNewSection = useMakeNewSection();

  const modalStyles = {
    width: '70rem',
    borderRadius: '5px',
    padding: '2rem',
  };

  const modalContentCss = css`
    & > img {
      height: 8rem;
      border-radius: 50%;
      padding: 3px;
      border: 3px solid ${colors.tertiary};
      display: block;
      margin: 0 auto;
    }

    & h2 {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 2rem;
    }

    & hr {
      margin: 1rem auto;
      border: none;
      border-top: 2px solid ${colors.tertiary};
    }

    & button {
      margin: 4rem auto;
      display: block;
      font-size: 2.4rem;
    }
  `;

  const handleNewSection = () => {
    makeNewSection();
    close();
  };

  return (
    <Modal
      styles={{
        modal: modalStyles,
      }}
      open={isOpen}
      onClose={close}
    >
      <div css={modalContentCss}>
        <img src={userData.profile_pic} alt={userData.first_name} />
        <h2>{userData.first_name}'s Sections</h2>
        {sections.map((s, i) => (
          <SectionInList key={s.id} data={s} index={i} close={close} />
        ))}
        <ControlBtn text="New section" onClick={handleNewSection} />
      </div>
    </Modal>
  );
};

const SectionInList = ({ data, index, close }) => {
  const [idx, setIdx] = useRecoilState(activeSectionIdxAtom);
  const deleteSection = useDeleteSection();

  const isActive = index === idx;

  const sectionInListCss = css`
    display: flex;
    justify-content: space-between;
    font-size: 1.8rem;
    margin: 1rem 2rem 1rem 0;
    cursor: pointer;

    & .non-trash-elements {
      padding: 5px;
      display: flex;
      border: 2px solid transparent;
      border-radius: 3px;
      justify-content: left;
      flex-grow: 1;
      align-items: baseline;

      &:hover,
      &:focus {
        border-color: ${colors.tertiary};
      }

      & .active {
        visibility: ${isActive ? 'visible' : 'hidden'};
        height: 1.8rem;
        width: 1.8rem;
        border-radius: 50%;
        background-color: ${colors.tertiary};
        transform: translateY(2px);
      }

      & .index {
        text-align: center;
        width: 3rem;
      }

      & .generations {
        @media (max-width: 400px) {
          display: none;
        }
      }
    }

    & .trash {
      height: 3rem;
      margin: auto 0;
    }
  `;

  const handleSelectSection = () => {
    setIdx(index);
    close();
  };

  return (
    <div css={sectionInListCss}>
      <div className="non-trash-elements" onClick={handleSelectSection}>
        <div className="active" />
        <div className="index">{index + 1}</div>
        <div className="name">{data.section_info.name}</div>
        <Pill
          text={`${data.section_info.students.length} people`}
          color="purple"
          className="students"
        />
        <Pill
          text={`${data.section_info.generations.length} generations`}
          color="darkgrey"
          className="generations"
        />
      </div>
      <img
        className="trash"
        src={trash}
        alt="Delete this section"
        onClick={() => deleteSection(data.id, index)}
      />
    </div>
  );
};

export default SectionModal;
