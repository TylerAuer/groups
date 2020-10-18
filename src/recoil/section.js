import { atom, selector } from 'recoil';

export const sectionList = atom({
  key: 'sectionList',
  default: [
    {
      id: 0,
      name: 'Section Name',
    },
  ],
});

export const activeSectionId = atom({
  key: 'activeSectionId',
  default: 0,
});

export const activeSectionName = selector({
  key: 'activeSectionName',
  get: ({ get }) => {
    const id = get(activeSectionId);
    const list = get(sectionList);

    const { name } = list[id];

    return name;
  },
});
