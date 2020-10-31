import { selector } from 'recoil';
import { activeSectionIdxAtom, userDataAtom } from '../atoms';

export const studentList = selector({
  // List of students in the currently active section
  key: 'studentList',
  get: ({ get }) => {
    const idx = get(activeSectionIdxAtom);
    const data = get(userDataAtom);

    if (data) {
      return data.GroupUsSections[idx].data.students;
    } else {
      return [];
    }
  },
});
