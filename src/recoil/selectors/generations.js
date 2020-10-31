import { selector } from 'recoil';
import { activeSectionIdxAtom, userDataAtom } from '../atoms';

export const genList = selector({
  // List of generations for the current section
  key: 'genList',
  get: ({ get }) => {
    const idx = get(activeSectionIdxAtom);
    const data = get(userDataAtom);

    if (data) {
      return data.GroupUsSections[idx].data.generations;
    } else {
      return [];
    }
  },
});
