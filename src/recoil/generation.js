import { atom, selector } from 'recoil';
import { EXTRA_OPTIONS } from '../constants/extraOptions';

const testStub = [
  {
    id: 0,
    active: true,
    date_created: 1601888920,
    group_size: 3,
    students: 4,
    extras: 'ONE_SMALLER',
    groups: [[0, 1, 2], [3]],
  },
  {
    id: 1,
    active: true,
    date_created: 1602631659,
    group_size: 2,
    students: 4,
    extras: 'ONE_LARGER',
    groups: [
      [0, 2],
      [1, 3],
    ],
  },
];

// ATOMS
export const generationState = atom({
  key: 'generationState',
  default: [],
});

export const activeGenerationId = atom({
  key: 'activeGenerationId',
  default: null,
});

export const groupSizeSetting = atom({
  key: 'groupSizeSetting',
  default: 4,
});

export const extrasSetting = atom({
  key: 'extrasSetting',
  default: EXTRA_OPTIONS.SPLIT_ACROSS,
});

// SELECTORS
export const activeGenCount = selector({
  key: 'activeGenCount',
  get: ({ get }) => {
    return get(generationState).length;
  },
});

export const activeGroups = selector({
  key: 'activeGroups',
  get: ({ get }) => {
    const id = get(activeGenerationId);
    const generations = get(generationState);

    if (id === null || !generations.length) {
      return null;
    }

    return generations[id].groups;
  },
});
