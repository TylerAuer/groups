import { useSetRecoilState } from 'recoil';
import { isSignedInAtom } from '../recoil/atoms';
import { useHistory } from 'react-router-dom';

const useVerifyUser = () => {
  const setIsSignedIn = useSetRecoilState(isSignedInAtom);
  const history = useHistory();

  const verifyUser = async () => {
    const res = await fetch('/auth/verify');

    if (res.status !== 202) {
      // User is not signed in
      setIsSignedIn(false);
      return;
    } else {
      setIsSignedIn(true);
      history.push('/app');
    }
  };

  return verifyUser;
};

export default useVerifyUser;
