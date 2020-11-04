/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import {
  userDataAtom,
  checkingForUserAtom,
  isSignedInAtom,
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  const profilePicCss = css`
    vertical-align: middle;
    height: 3rem;
    border-radius: 50%;
    margin: 1rem;
    padding: 2px;
    border: 3px solid ${colors.tertiary};
  `;

  console.log(user);

  if (checkingForUser) {
    // Checking for the user's info
    return null;
  } else if (isSignedIn) {
    // USER IS SIGNED IN
    return (
      <React.Fragment>
        <SaveTracker />
        <img
          onClick={() => setIsModalOpen(true)}
          css={profilePicCss}
          src={user.profile_pic}
          alt={user.first_name}
        />
        <AccountModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </React.Fragment>
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
