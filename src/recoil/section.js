import { atom } from 'recoil';

export const sectionState = atom({
  key: 'sectionState',
  default: [
    {
      id: 0,
      name: 'Section Name',
    },
  ],
});
