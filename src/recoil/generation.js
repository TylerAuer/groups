import { atom, selector } from 'recoil';

const UNEVEN_OPTIONS = {
  ONE_LARGE: 'One larger group with all the extras',
  MANY_LARGER: 'Make groups 1 student bigger where needed',
  GROUP_OF_LEFTOVERS: 'Extra form their own smaller group',
};

const testStub = [
  {
    id: 0,
    active: true,
    date_created: 1602888920,
    group_size: 3,
    handle_unevenness: 'many small', // "many large", "one large", "one small",
    groups: [
      [0, 1],
      [2, 3],
    ],
  },
  {
    id: 1,
    active: true,
    date_created: 1602631659,
    group_size: 3,
    handle_unevenness: 'one small', // "many large", "one large", "one small",
    groups: [[0, 1, 2], [3]],
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

export const unevenSetting = atom({
  key: 'unevenSetting',
  default: UNEVEN_OPTIONS.MANY_LARGER,
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

    console.log(id, generations);

    if (id === null || !generations.length) {
      return null;
    }

    return generations[id].groups;
  },
});
