import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  sectionListAtom,
  studentListAtom,
  genListAtom,
  activeSectionIdxAtom,
} from '../recoil/atoms';

const useLoadSections = () => {
  const setSectionList = useSetRecoilState(sectionListAtom);
  const setStudentList = useSetRecoilState(studentListAtom);
  const setGenList = useSetRecoilState(genListAtom);
  const activeSectionIdx = useRecoilValue(activeSectionIdxAtom);

  const loadSections = async () => {
    const res = await fetch('/data/sections').then((res) => res.json());

    setSectionList(res);
    setStudentList(res[activeSectionIdx].students);
    setGenList(res[activeSectionIdx].generations);
  };

  return loadSections;
};

export default useLoadSections;
