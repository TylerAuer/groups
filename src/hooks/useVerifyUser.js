import { useSetRecoilState } from 'recoil';
import { savingIsDisabled } from '../recoil/atoms';
import { useHistory } from 'react-router-dom';

const useVerifyUser = () => {
  const setSavingIsDisabled = useSetRecoilState(savingIsDisabled);
  const history = useHistory();

  const verifyUser = async () => {
    const res = await fetch('/auth/verify');

    if (res.status !== 202) {
      // User is not signed in
      setSavingIsDisabled(true);
      return;
    } else {
      history.push('/app');
    }
  };

  return verifyUser;
};

export default useVerifyUser;
