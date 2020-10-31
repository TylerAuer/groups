// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { activeSectionIdxAtom, activeGenIdxAtom } from '../recoil/atoms';
// import useSaveSection from '../hooks/useSaveSection';
// import { genList } from '../recoil/selectors/generations';
// import { sectionList } from '../recoil/selectors/sections';
// import { studentList } from '../recoil/selectors/students';

// const useSwitchSections = () => {
//   const sections = useRecoilValue(sectionList);
//   const setSectionIdx = useSetRecoilState(activeSectionIdxAtom);
//   const setStudentList = useSetRecoilState(studentList);
//   const setGenList = useSetRecoilState(genList);
//   const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);
//   const save = useSaveSection();

//   const switchSections = (idx) => {
//     // Immediatelly saves the current state so that changes aren't lost when
//     // the new section is loaded.
//     save();

//     // set active section to idx
//     setSectionIdx(idx);

//     // update student list
//     setStudentList(sections[idx].students);

//     // update gen list
//     setGenList(sections[idx].generations);

//     // set active gen to null
//     setActiveGenIdx(null);
//   };

//   return switchSections;
// };

// export default useSwitchSections;
