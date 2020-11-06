// Minimal elements of state for the application
import { atom } from 'recoil';
import { EXTRA_OPTIONS } from '../constants/extraOptions';

///////////////////////////////////////////////////////////
// USER AND AUTH ATOMS ////////////////////////////////////

// Holds the user data whether signed in or not
export const userDataAtom = atom({
  key: 'userDataAtom',
  default: null,
});

// Tracks whether the site is awaiting user data from the backend
export const checkingForUserAtom = atom({
  key: 'checkingForUserAtom',
  default: true,
});

// Tracks if a user is signed in
export const isSignedInAtom = atom({
  key: 'isSignedInAtom',
  default: false,
});

////////////////////////////////////////////////////////////
// ACTIVE ATOMS ////////////////////////////////////////////

export const activeGenIdxAtom = atom({
  // Tracks the generation currently being viewed
  key: 'activeGenIdxAtom',
  default: null,
});

export const activeSectionIdxAtom = atom({
  // The index in section list of the section currently being viewed
  key: 'activeSectionIdxAtom',
  default: 0,
});

////////////////////////////////////////////////////////////
// GENERATION CONFIG SETTINGS //////////////////////////////

export const groupSizeConfigAtom = atom({
  // Tracks the user's setting for the groups size when
  // generating a new generation
  key: 'groupSizeConfigAtom',
  default: 4,
});

export const extrasConfigAtom = atom({
  // Tracks the user's setting for how to handle extra students
  // when the groups can't be even
  key: 'extrasConfigAtom',
  default: EXTRA_OPTIONS.SPLIT_ACROSS,
});

export const dataIsSavedAtom = atom({
  key: 'dataIsSavedAtom',
  default: true,
});

////////////////////////////////////////////////////////////
// COMPONENT STATES ////////////////////////////////////////

export const isSectionModalOpenAtom = atom({
  key: 'isSectionModalOpenAtom',
  default: false,
});

export const isAccountModalOpenAtom = atom({
  key: 'isAccountModalOpenAtom',
  default: false,
});

export const isExtrasDropdownOpenAtom = atom({
  key: 'isExtrasDropdownOpenAtom',
  default: false,
});
