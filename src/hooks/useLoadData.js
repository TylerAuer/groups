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

const useLoadData = () => {
  const setUser = useSetRecoilState(userAtom);
  const setSectionList = useSetRecoilState(sectionListAtom);
  const setVersion = useSetRecoilState(sectionVersionAtom);
  const setGenList = useSetRecoilState(genListAtom);
  const setStudentList = useSetRecoilState(studentListAtom);
  const setActiveSectionIdx = useSetRecoilState(activeSectionIdxAtom);
  const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);

  const loadData = async () => {
    const res = await fetch('/data/user').then((res) => res.json());

    // Parse the JSON
    const user = {
      id: res.id,
      first_name: res.first_name,
      profile_pic: res.profile_pic,
    };

    const sections = res.GroupUsSections.map((s) => ({
      id: s.id,
      name: s.data.name,
    }));

    const gens = res.GroupUsSections[0].data.generations;
    const students = res.GroupUsSections[0].data.students;
    const version = res.GroupUsSections[0].data.version;

    // Update application state
    setUser(user);
    setSectionList(sections);
    setVersion(version);
    setGenList(gens);
    setStudentList(students);

    // Reset active indexes to 0 or null
    setActiveSectionIdx(0);
    setActiveGenIdx(gens.length ? 0 : null);
  };

  return loadData;
};

export default useLoadData;
