import { selector } from 'recoil';
import { activeGenIdxAtom } from '../atoms';
import { studentList } from './students';
import { genList } from './generations';

export const activeGroups = selector({
  // 2D array of groups with students names
  // Null if there is no generations or if no active groups

  key: 'activeGroups',
  get: ({ get }) => {
    const gens = get(genList);
    const idx = get(activeGenIdxAtom);

    const students = get(studentList);

    if (!gens.length || idx === null || gens.length <= idx) return null;

    const { groups } = gens[idx];

    return groups.map((group) =>
      group.map((student) => students[student].name)
    );
  },
});
