// import { useState } from 'react';

// const initialState = {
//   sections: [
//     {
//       id: 0,
//       name: 'Section Name',
//       disallowed_pairings: [],
//       students: [],
//       generations: [],
//     },
//   ],
// };

// const useStore = () => {
//   const [store, setStore] = useState(initialState);
//   const [section, setSection] = useState(0);
//   const [generation, setGeneration] = useState(0);

//   const studentList = store.sections[section].students;
//   const genList = store.sections[section].generations;
//   const groupList = (genList[generation] && genList[generation].groups) || null;

//   const toggleStudentActive = (id) => {
//     const updated = { ...store };
//     updated.sections[section].students[id].active = !updated.sections[section]
//       .students[id].active;

//     setStore(updated);
//   };

//   return {
//     store,
//     section,
//     studentList,
//     groupList,
//     setGeneration,
//     genList,
//     toggleStudentActive,
//     studentList,
//   };
// };

// export default useStore;
