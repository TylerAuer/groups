import { atom, selector } from 'recoil';

// ATOMS

export const generationState = atom({
  key: 'generationState',
  default: [],
});

// SELECTORS
export const activeGenCount = selector({
  key: 'activeGenCount',
  get: ({ get }) => {
    return get(generationState).length;
  },
});
