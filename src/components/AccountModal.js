/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { colors } from '../constants/styles';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-responsive-modal';
import MediumBtn from './buttons/MediumBtn';
import { useResetRecoilState, useRecoilValue } from 'recoil';
import { userDataAtom, isSignedInAtom } from '../recoil/atoms';
import 'react-responsive-modal/styles.css';

const AccountModal = ({ isOpen, setOpen }) => {
  const userData = useRecoilValue(userDataAtom);
  const resetUserData = useResetRecoilState(userDataAtom);
  const resetIsSignedIn = useResetRecoilState(isSignedInAtom);
  const history = useHistory();

  const modalContentCss = css`
    text-align: center;

    & > img {
      vertical-align: middle;
      height: 5rem;
      border-radius: 50%;
      padding: 5px;
      border: 3px solid ${colors.tertiary};
    }

    & button {
      margin: 1rem auto;
      width: 20rem;
    }

    & hr {
      margin: 2rem auto;
      border: none;
      border-top: 1px solid ${colors.tertiary};
    }
  `;

  const handleSignOut = () => {
    fetch('/auth/logout')
      .then((res) => {
        resetUserData();
        resetIsSignedIn();
        history.push('/');
      })
      .catch((err) => console.log('Error logging out:', err));
  };

  return (
    <Modal
      styles={{
        modal: { maxWidth: '25rem', borderRadius: '5px', padding: '1.5rem' },
      }}
      open={isOpen}
      onClose={() => setOpen(false)}
      center
    >
      <div css={modalContentCss}>
        <img src={userData.profile_pic} alt={userData.first_name} />
        <h2>{userData.first_name}'s Account</h2>
        <MediumBtn text="Sign Out" onClick={handleSignOut} />
        <hr />
        <p>
          <b>Warning: </b>
          Deactivating your account will permanently delete all of your
          sections, groups, and other data.
        </p>
        <p>
          <b>This cannot be undone!</b>
        </p>
        <MediumBtn text="Deactivate Account" onClick={null} />
      </div>
    </Modal>
  );
};

export default AccountModal;
