import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  userAtom,
  sectionListAtom,
  genListAtom,
  studentListAtom,
  activeSectionIdxAtom,
  activeGenIdxAtom,
  sectionVersionAtom,
} from '../recoil/atoms';

const useLoadUserAndSections = () => {
  const setUser = useSetRecoilState(userAtom);
  const setSectionList = useSetRecoilState(sectionListAtom);
  const setVersion = useSetRecoilState(sectionVersionAtom);
  const setGenList = useSetRecoilState(genListAtom);
  const setStudentList = useSetRecoilState(studentListAtom);
  const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);
  const activeSectionIdx = useRecoilValue(activeSectionIdxAtom);

  const loadUserAndSections = async () => {
    const res = await fetch('/data').then((res) => res.json());

    const user = {
      id: res.id,
      first_name: res.first_name,
      profile_pic: res.profile_pic,
    };
    setUser(user);

    const reformatedSections = res.GroupUsSections.map((s) => ({
      ...s,
      ...s.data,
    }));

    setSectionList(reformatedSections);

    const gens = res.GroupUsSections[activeSectionIdx].data.generations;
    setGenList(gens);

    const students = res.GroupUsSections[activeSectionIdx].data.students;
    setStudentList(students);

    const version = res.GroupUsSections[activeSectionIdx].data.version;
    setVersion(version);
  };

  return loadUserAndSections;
};

export default useLoadUserAndSections;
