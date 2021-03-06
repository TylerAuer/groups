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
      height: 8rem;
      border-radius: 50%;
      padding: 0.5rem;
      border: 3px solid ${colors.tertiary};
    }

    & button {
      margin: 1rem auto;
      width: 35rem;
    }

    & hr {
      margin: 2rem auto;
      border: none;
      border-top: 1px solid ${colors.tertiary};
    }

    & .destroy {
      background-color: red;

      &:hover,
      &:focus {
        background-color: red;
      }
    }
  `;

  const handleSignOut = () => {
    fetch('/auth/logout')
      .then((res) => {
        resetUserData();
        resetIsSignedIn();
        history.push('/');
      })
      .catch((err) => console.error('Error logging out:', err));
  };

  const handleDestroy = () => {
    const warning =
      'WARNING: Are you sure you want to delete all of your data? This cannot be undone.';

    if (window.confirm(warning))
      fetch('/auth/destroy')
        .then(() => history.push('/'))
        .catch((err) =>
          console.error('Unknown Error: Unable to destroy account')
        );
  };

  return (
    <Modal
      styles={{
        modal: { maxWidth: '50rem', borderRadius: '5px', padding: '1.5rem' },
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
          Destroying your account will permanently delete all of your sections,
          groups, and other data.
        </p>
        <p>
          <b>This cannot be undone!</b>
        </p>
        <MediumBtn
          className="destroy"
          text="Destroy Account"
          onClick={handleDestroy}
        />
      </div>
    </Modal>
  );
};

export default AccountModal;
