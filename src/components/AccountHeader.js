/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  userDataAtom,
  checkingForUserAtom,
  isSignedInAtom,
  isAccountModalOpenAtom,
} from '../recoil/atoms';
import SaveTracker from './SaveTracker';
import { colors } from '../constants/styles';
import { useHistory } from 'react-router-dom';
import AccountModal from './AccountModal';
import ControlBtn from './buttons/ControlBtn';

const AccountHeader = () => {
  const checkingForUser = useRecoilValue(checkingForUserAtom);
  const isSignedIn = useRecoilValue(isSignedInAtom);
  const user = useRecoilValue(userDataAtom);
  const [isModalOpen, setIsModalOpen] = useRecoilState(isAccountModalOpenAtom);
  const history = useHistory();

  const profilePicCss = css`
    vertical-align: middle;
    height: 3rem;
    border-radius: 50%;
    margin: 1rem;
    padding: 2px;
    border: 3px solid ${colors.tertiary};
  `;

  if (checkingForUser) {
    // Checking for the user's info
    return null;
  } else if (isSignedIn) {
    // USER IS SIGNED IN
    return (
      <div>
        <SaveTracker />
        <img
          onClick={() => setIsModalOpen(true)}
          css={profilePicCss}
          src={user.profile_pic}
          alt={user.first_name}
        />
        <AccountModal isOpen={isModalOpen} setOpen={setIsModalOpen} />
      </div>
    );
  } else {
    // USER IS NOT SIGNED IN
    return (
      <ControlBtn
        text="Sign In"
        onClick={() => {
          history.push('/login');
        }}
      />
    );
  }
};

export default AccountHeader;
