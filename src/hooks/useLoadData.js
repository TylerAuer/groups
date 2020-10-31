import { useSetRecoilState } from 'recoil';
import { userDataAtom } from '../recoil/atoms';

const useLoadUser = () => {
  const setUserData = useSetRecoilState(userDataAtom);

  const loadData = async () => {
    const res = await fetch('/data').then((res) => res.json());

    setUserData(res);
  };

  return loadData;
};

export default useLoadUser;
