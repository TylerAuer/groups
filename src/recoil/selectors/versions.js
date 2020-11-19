import { selector } from 'recoil';
import { sectionList } from '../selectors/sections';

export const versionMap = selector({
  // List of students in the currently active section
  key: 'versionMap',
  get: ({ get }) => {
    const sections = get(sectionList);

    if (!sections) return [];

    const versionMap = {};

    for (let section of sections) {
      versionMap[section.id] = section.section_info.version;
    }

    return versionMap;
  },
});
