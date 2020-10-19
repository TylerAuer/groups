import { atom, selector } from 'recoil';

export const EXTRAS_OPTIONS = {
  ONE_LARGER: {
    name: 'One larger',
    desc: 'Extras are all added to the same group',
  },
  SPLIT_ACROSS: {
    name: 'Split across',
    desc: 'Extras are split across groups',
  },
  ONE_SMALLER: {
    name: 'One smaller',
    desc: 'Extras form their own smaller group',
  },
};

const testStub = [
  {
    id: 0,
    active: true,
    date_created: 1602888920,
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
  default: testStub,
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
  default: EXTRAS_OPTIONS.SPLIT_ACROSS,
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
