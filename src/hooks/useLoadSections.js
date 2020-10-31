// import { useSetRecoilState, useRecoilValue } from 'recoil';
// import {
//   sectionListAtom,
//   studentListAtom,
//   genListAtom,
//   activeSectionIdxAtom,
//   sectionVersionAtom,
// } from '../recoil/atoms';

// const useLoadSections = () => {
//   const setSectionList = useSetRecoilState(sectionListAtom);
//   const setStudentList = useSetRecoilState(studentListAtom);
//   const setGenList = useSetRecoilState(genListAtom);
//   const setVersion = useSetRecoilState(sectionVersionAtom);
//   const activeSectionIdx = useRecoilValue(activeSectionIdxAtom);

//   const loadSections = async () => {
//     const res = await fetch('/data/sections').then((res) => res.json());

//     setSectionList(res);
//     setStudentList(res[activeSectionIdx].students);
//     setGenList(res[activeSectionIdx].generations);
//     setVersion(res[activeSectionIdx].version);
//   };

//   return loadSections;
// };

// export default useLoadSections;
