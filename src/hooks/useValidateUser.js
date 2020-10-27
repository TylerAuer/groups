import { useRecoilState } from 'recoil';
import { userState } from '../recoil/users';
import { useHistory } from 'react-router';
import isEqual from 'lodash.isequal';

const useValidateUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const history = useHistory();

  // Make a fetch request to user data point to make sure the user is signed in
  // Update app state
  const validateUser = async (redirect = false) => {
    const res = await fetch('/data/user');

    // User is not authenticated, redirect to login page
    // Must pass true to get redirect
    if (res.status === 401) {
      if (redirect === true) history.push('/login');
      return;
    }

    const responseUser = await res.json();

    if (!user || !isEqual(user, responseUser)) {
      setUser(responseUser);
    }
  };

  return validateUser;
};

export default useValidateUser;
