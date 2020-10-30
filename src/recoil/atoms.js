// Minimal elements of state for the application
import { atom } from 'recoil';
import { EXTRA_OPTIONS } from '../constants/extraOptions';

///////////////////////////////////////////////////////////
// USER AND AUTH ATOMS ////////////////////////////////////

export const userAtom = atom({
  // Null if not signed in
  //
  // If signed in, includes:
  // - first_name
  // - profile_pic
  // - id <- Primary key in DB
  key: 'userAtom',
  default: null,
});

///////////////////////////////////////////////////////////
// SECTION ATOMS //////////////////////////////////////////

export const sectionListAtom = atom({
  // Only used if a user is signed in
  key: 'sectionListAtom',
  default: [],
});

export const activeSectionIdxAtom = atom({
  // The index in section list of the section currently being viewed
  key: 'activeSectionIdxAtom',
  default: 0,
});

export const sectionVersionAtom = atom({
  // The index in section list of the section currently being viewed
  key: 'sectionVersionAtom',
  default: null,
});

///////////////////////////////////////////////////////////
// GENERATION ATOMS ///////////////////////////////////////

export const genListAtom = atom({
  // List of generations for the current section
  key: 'genListAtom',
  default: [],
});

export const activeGenIdxAtom = atom({
  // Tracks the generation currently being viewed
  key: 'activeGenIdxAtom',
  default: null,
});

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

////////////////////////////////////////////////////////////
// STUDENT LIST ATOMS //////////////////////////////////////

export const studentListAtom = atom({
  // List of students in the currently active section
  key: 'studentListAtom',
  default: [],
});

///////////////////////////////////////////////////////////
// SAVING DATA ////////////////////////////////////////////

export const dataIsSavedAtom = atom({
  // List of students in the currently active section
  key: 'dataIsSavedAtom',
  default: true,
});
