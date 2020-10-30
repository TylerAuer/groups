import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  activeSectionIdxAtom,
  activeGenIdxAtom,
  sectionListAtom,
} from '../recoil/atoms';
import useLoadUserAndSections from './useLoadUserAndSections';
import useSwitchSections from './useSwitchSections';

const useMakeNewSection = () => {
  const setActiveSectionIdx = useSetRecoilState(activeSectionIdxAtom);
  const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);
  const switchSections = useSwitchSections();
  const sectionList = useRecoilValue(sectionListAtom);
  const loadUserAndSections = useLoadUserAndSections();

  const makeNewSection = async () => {
    await fetch('/data/section/new', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('New section created');
      });

    loadUserAndSections();
    switchSections(sectionList.length);
  };

  return makeNewSection;
};

export default useMakeNewSection;
