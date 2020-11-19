import { useSetRecoilState } from 'recoil';
import {
  userDataAtom,
  isSignedInAtom,
  checkingForUserAtom,
  dataIsSavedAtom,
  activeSectionIdxAtom,
} from '../recoil/atoms';
import { SAVE_STATUS } from '../constants/saveStatus';

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
  const setSaveStatus = useSetRecoilState(dataIsSavedAtom);
  const setIdx = useSetRecoilState(activeSectionIdxAtom);

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
    setIdx((prev) => {
      // If updating data (because it was stale) and the current section
      // was deleted, then default to the 0th section
      if (!data.GroupUsSections[prev]) return 0;
      else return prev;
    });
    setUserData(data);
    setCheckingForUser(false);
    setSaveStatus(SAVE_STATUS.SAVED);
  };

  return loadData;
};

export default useLoadUser;
