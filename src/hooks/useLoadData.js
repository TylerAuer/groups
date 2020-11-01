import { useSetRecoilState } from 'recoil';
import {
  userDataAtom,
  isSignedInAtom,
  checkingForUserAtom,
} from '../recoil/atoms';

const defaultUserData = {
  id: null,
  first_name: null,
  profile_pic: null,
  createdAt: null,
  updatedAt: null,
  GroupUsSections: [
    {
      id: null,
      section_info: {
        generations: [],
        name: 'My first section',
        students: [],
        version: 0,
      },
      createdAt: null,
      updatedAt: null,
      GroupUsUserId: null,
    },
  ],
};

const useLoadUser = () => {
  const setUserData = useSetRecoilState(userDataAtom);
  const setIsSignedIn = useSetRecoilState(isSignedInAtom);
  const setCheckingForUser = useSetRecoilState(checkingForUserAtom);

  const loadData = async () => {
    const res = await fetch('/data');

    if (res.status === 401) {
      // USER IS NOT LOGGED IN
      console.log('User not detected.');
      setUserData(defaultUserData);
      setCheckingForUser(false);
      return;
    }

    const data = await res.json();
    setIsSignedIn(true);
    setUserData(data);
    setCheckingForUser(false);
  };

  return loadData;
};

export default useLoadUser;
