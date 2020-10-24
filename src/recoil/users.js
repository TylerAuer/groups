import { atom } from 'recoil';

// ATOMS
export const isSignedIn = atom({
  key: 'isSignedIn',
  default: false,
});

export const username = atom({
  key: 'username',
  default: null,
});

export const userImgLink = atom({
  key: 'userImgLink',
  default: null,
});

export const userIdToken = atom({
  key: 'userIdToken',
  default: null,
});
