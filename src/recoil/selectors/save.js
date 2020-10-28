import { selector } from 'recoil';
import {
  genListAtom,
  activeSectionIdxAtom,
  studentListAtom,
  sectionListAtom,
} from '../atoms';

export const saveSectionPrimaryKeySelector = selector({
  // Primary key for the section in the DB, so we know which section to patch
  key: 'saveSectionPrimaryKeySelector',
  get: ({ get }) => {
    const sections = get(sectionListAtom);
    const activeSectionIdx = get(activeSectionIdxAtom);

    if (!sections.length) return null;

    return sections[activeSectionIdx].id;
  },
});

export const saveSectionNameSelector = selector({
  // The name of the section
  key: 'saveSectionNameSelector',
  get: ({ get }) => {
    const sections = get(sectionListAtom);
    const activeSectionIdx = get(activeSectionIdxAtom);

    if (!sections.length) return null;

    return sections[activeSectionIdx].name;
  },
});

export const saveDataSelector = selector({
  // Data formated so it can just be pushed into the cell in the DB at the
  // appropriate primary key
  key: 'saveDataSelector',
  get: ({ get }) => {
    const gens = get(genListAtom);
    const students = get(studentListAtom);
    const sectionName = get(saveSectionNameSelector);

    return {
      name: sectionName,
      students: students,
      generations: gens,
    };
  },
});
