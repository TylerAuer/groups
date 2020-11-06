/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  userDataAtom,
  checkingForUserAtom,
  isSignedInAtom,
  isAccountModalOpenAtom,
  isSectionModalOpenAtom,
} from '../recoil/atoms';
import SaveTracker from './SaveTracker';
import { colors } from '../constants/styles';
import { useHistory } from 'react-router-dom';
import AccountModal from './AccountModal';
import ControlBtn from './buttons/ControlBtn';
import SectionModal from './SectionModal';

const AccountHeader = () => {
  const checkingForUser = useRecoilValue(checkingForUserAtom);
  const isSignedIn = useRecoilValue(isSignedInAtom);
  const user = useRecoilValue(userDataAtom);
  const [isAccountModalOpen, setIsAccountModalOpen] = useRecoilState(
    isAccountModalOpenAtom
  );
  const [isSectionModalOpen, setIsSectionModalOpen] = useRecoilState(
    isSectionModalOpenAtom
  );
  const history = useHistory();

  const loggedInCss = css`
    & img {
      vertical-align: middle;
      height: 3rem;
      border-radius: 50%;
      margin: 1rem;
      padding: 2px;
      border: 3px solid ${colors.tertiary};
    }

    & div {
      margin-right: 1rem;
    }
  `;

  const closeAccountModal = () => {
    setIsAccountModalOpen(false);
  };

  const closeSectionModal = () => {
    setIsSectionModalOpen(false);
  };

  if (checkingForUser) {
    // Checking for the user's info
    return null;
  } else if (isSignedIn) {
    // USER IS SIGNED IN
    return (
      <div css={loggedInCss}>
        <SaveTracker />
        <SectionModal isOpen={isSectionModalOpen} close={closeSectionModal} />
        <ControlBtn
          text="Sections"
          onClick={() => setIsSectionModalOpen(true)}
        />
        <img
          onClick={() => setIsAccountModalOpen(true)}
          src={user.profile_pic}
          alt={user.first_name}
        />
        <AccountModal isOpen={isAccountModalOpen} setOpen={closeAccountModal} />
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
