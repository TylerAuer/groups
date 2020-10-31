import setGroupSizes from './setGroupSizes';
import shuffle from './shuffle';
import calcGroupWeight from './calcGroupWeight';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import {
  groupSizeConfigAtom,
  extrasConfigAtom,
  activeGenIdxAtom,
  userDataAtom,
  activeSectionIdxAtom,
} from '../recoil/atoms';
import { relationGraph } from '../recoil/selectors/relations';
import cloneDeep from 'lodash.clonedeep';

const useGenNewGen = () => {
  const setData = useSetRecoilState(userDataAtom);
  const relations = useRecoilValue(relationGraph);
  const size = useRecoilValue(groupSizeConfigAtom);
  const extras = useRecoilValue(extrasConfigAtom);
  const idx = useRecoilValue(activeSectionIdxAtom);
  const setGroupsBeingShown = useSetRecoilState(activeGenIdxAtom);

  const iterations = 10000;

  const algo = () => {
    // Get list of active IDs
    let ids = Object.values(relations)
      .filter((d) => d.active) // Remove inactive students
      .map((d) => d.id); // Return just the IDs

    // Determine group sizes
    const count = ids.length;
    const groupSizes = setGroupSizes(count, size, extras);

    // Trackers for the arrangement with the lowest total weight
    let minWeight = Infinity;
    let groupings = [];

    // Run iterations
    for (let i = 0; i < iterations; i++) {
      let idList = [...shuffle(ids)];
      const groups = [];
      groupSizes.forEach((len) => {
        groups.push(idList.splice(0, len));
      });

      let weight = 0;
      groups.forEach((g) => {
        weight += calcGroupWeight(relations, g);
      });

      if (weight < minWeight) {
        minWeight = weight;
        groupings = groups;
      }
    }

    setData((prev) => {
      const next = cloneDeep(prev);

      next.GroupUsSections[idx].section_info.generations = [
        {
          date_created: Math.round(Date.now() / 1000), // Gives datetime in epoch format (no ms)
          group_size: size,
          students: count,
          extras: extras.const,
          groups: groupings,
        },
        ...prev.GroupUsSections[idx].section_info.generations,
      ];

      next.GroupUsSections[idx].section_info.version =
        prev.GroupUsSections[idx].section_info.version + 1;

      return next;
    });

    // Set New Generation as the one being displayed
    setGroupsBeingShown(0);
  };

  return algo;
};

export default useGenNewGen;
