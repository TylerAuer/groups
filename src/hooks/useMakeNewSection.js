import { useSetRecoilState } from 'recoil';
import {
  userAtom,
  sectionListAtom,
  genListAtom,
  studentListAtom,
  activeSectionIdxAtom,
  activeGenIdxAtom,
  sectionVersionAtom,
} from '../recoil/atoms';

const useMakeNewSection = () => {
  const setUser = useSetRecoilState(userAtom);
  const setSectionList = useSetRecoilState(sectionListAtom);
  const setVersion = useSetRecoilState(sectionVersionAtom);
  const setGenList = useSetRecoilState(genListAtom);
  const setStudentList = useSetRecoilState(studentListAtom);
  const setActiveSectionIdx = useSetRecoilState(activeSectionIdxAtom);
  const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);

  const makeNewSection = async () => {
    fetch('/data/section/new', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // // Update application state
  // setSectionList(sections);
  // setVersion(version);
  // setGenList(gens);
  // setStudentList(students);

  // // Reset active indexes
  // setActiveSectionIdx(0);
  // setActiveGenIdx(null);

  return makeNewSection;
};

export default useMakeNewSection;
