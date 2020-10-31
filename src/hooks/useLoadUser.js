// import { useSetRecoilState } from 'recoil';
// import { userAtom } from '../recoil/atoms';
// import useLoadSections from './useLoadSections';

// const useLoadUser = () => {
//   const loadSections = useLoadSections();
//   const setUser = useSetRecoilState(userAtom);

//   const loadUser = async () => {
//     const res = await fetch('/data/user').then((res) => res.json());

//     const user = {
//       id: res.id,
//       first_name: res.first_name,
//       profile_pic: res.profile_pic,
//     };

//     setUser(user);
//     loadSections();
//   };

//   return loadUser;
// };

// export default useLoadUser;
