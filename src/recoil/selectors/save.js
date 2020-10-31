// import { selector } from 'recoil';
// import { activeSectionIdxAtom, userDataAtom } from '../atoms';
// import { studentList } from './students';
// import { genList } from './generations';

// export const saveSectionPrimaryKeySelector = selector({
//   // Primary key for the section in the DB, so we know which section to patch
//   key: 'saveSectionPrimaryKeySelector',
//   get: ({ get }) => {
//     const activeSectionIdx = get(activeSectionIdxAtom);
//     const data = get(userDataAtom);
//     const sections = data.GroupUsSections;

//     if (!sections) return null;

//     return sections[activeSectionIdx].id;
//   },
// });

// export const saveSectionNameSelector = selector({
//   // The name of the section
//   key: 'saveSectionNameSelector',
//   get: ({ get }) => {
//     const data = get(userDataAtom);
//     const sections = data.GroupUsSections;
//     const activeSectionIdx = get(activeSectionIdxAtom);

//     if (!sections) return null;

//     return sections[activeSectionIdx].name;
//   },
// });

// export const saveDataSelector = selector({
//   // Data formated so it can just be pushed into the cell in the DB at the
//   // appropriate primary key
//   key: 'saveDataSelector',
//   get: ({ get }) => {
//     const gens = get(genList);
//     const students = get(studentList);
//     const sectionName = get(saveSectionNameSelector);

//     return {
//       name: sectionName,
//       students: students,
//       generations: gens,
//     };
//   },
// });
