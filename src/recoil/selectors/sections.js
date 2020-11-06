import { selector } from 'recoil';
import { userDataAtom } from '../atoms';

export const sectionList = selector({
  // List of students in the currently active section
  key: 'sectionList',
  get: ({ get }) => {
    const data = get(userDataAtom);

    console.log(data.GroupUsSections);

    if (data) {
      return data.GroupUsSections;
    }
  },
});
