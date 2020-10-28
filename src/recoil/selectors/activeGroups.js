import { selector } from 'recoil';
import { genListAtom, activeGenIdxAtom, studentListAtom } from '../atoms';

export const activeGroupsSelector = selector({
  // 2D array of groups with students names
  // Null if there is no generations or if no active groups

  key: 'activeGroupsSelector',
  get: ({ get }) => {
    const gens = get(genListAtom);
    const idx = get(activeGenIdxAtom);
    const students = get(studentListAtom);

    if (!gens.length || idx === null) return null;

    const { groups } = gens[idx];

    return groups.map((group) =>
      group.map((student) => students[student].name)
    );
  },
});
