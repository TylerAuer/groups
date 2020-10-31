import { useRecoilState, useSetRecoilState } from 'recoil';
import { activeSectionIdxAtom, activeGenIdxAtom } from '../recoil/atoms';
import { genList } from '../recoil/selectors/generations';
import { sectionList } from '../recoil/selectors/sections';
import { studentList } from '../recoil/selectors/students';

const useMakeNewSection = () => {
  const [sectionList, setSectionList] = useRecoilState(sectionList);
  const setSectionIdx = useSetRecoilState(activeSectionIdxAtom);
  const setStudentList = useSetRecoilState(studentList);
  const setGenList = useSetRecoilState(genList);
  const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);

  const makeNewSection = async () => {
    const newSection = await fetch('/data/section/new', {
      method: 'POST',
    }).then((res) => res.json());

    // update sectionList
    setSectionList((old) => [...old, newSection]);

    // You might be tempted to use the useSwitchSections hook here, but it won't
    // work. The problem is that the useSwitchSections hook relies on the new
    // section to already be in the sectionListAtom. So, when it tries to grab
    // the info it needs to adjust state, none of it is there
    setSectionIdx(sectionList.length);
    setStudentList(newSection.students);
    setGenList(newSection.generations);
    setActiveGenIdx(null);
  };

  return makeNewSection;
};

export default useMakeNewSection;
