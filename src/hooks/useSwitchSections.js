import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  activeSectionIdxAtom,
  studentListAtom,
  genListAtom,
  activeGenIdxAtom,
  sectionListAtom,
} from '../recoil/atoms';

const useSwitchSections = () => {
  const sectionList = useRecoilValue(sectionListAtom);
  const setSectionIdx = useSetRecoilState(activeSectionIdxAtom);
  const setStudentList = useSetRecoilState(studentListAtom);
  const setGenList = useSetRecoilState(genListAtom);
  const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);

  const switchSections = (idx) => {
    console.log('section-list', sectionList);
    console.log('idx', idx);

    // set active section to idx
    setSectionIdx(idx);

    // update student list
    setStudentList(sectionList[idx].students);

    // update gen list
    setGenList(sectionList[idx].generations);

    // set active gen to null
    setActiveGenIdx(null);
  };

  return switchSections;
};

export default useSwitchSections;
