import { atom, selector } from 'recoil';

export const EXTRAS_OPTIONS = {
  ONE_LARGE: {
    name: 'One larger',
    desc: 'One larger group with all the extras',
  },
  MANY_LARGER: {
    name: 'Many larger',
    desc: 'Many groups may be 1 student larger',
  },
  EXTRA_GROUP: {
    name: 'Extra group',
    desc: 'Extras form their own smaller group',
  },
};

const testStub = [
  {
    id: 0,
    active: true,
    date_created: 1602888920,
    group_size: 3,
    handle_unevenness: 'one small',
    groups: [[0, 1, 2], [3]],
  },
  {
    id: 1,
    active: true,
    date_created: 1602631659,
    group_size: 2,
    handle_unevenness: 'many large',
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
  default: EXTRAS_OPTIONS.MANY_LARGER,
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
