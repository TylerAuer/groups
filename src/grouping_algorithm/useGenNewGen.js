import setGroupSizes from './setGroupSizes';
import shuffle from './shuffle';
import calcGroupWeight from './calcGroupWeight';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  groupSizeConfigAtom,
  extrasConfigAtom,
  genListAtom,
  activeGenIdxAtom,
  userAtom,
} from '../recoil/atoms';
import { relationGraph } from '../recoil/selectors/relations';
import useSaveSection from '../hooks/useSaveSection';

const useGenNewGen = () => {
  const user = useRecoilValue(userAtom);
  const relations = useRecoilValue(relationGraph);
  const size = useRecoilValue(groupSizeConfigAtom);
  const extras = useRecoilValue(extrasConfigAtom);
  const [gens, setGens] = useRecoilState(genListAtom);
  const setGroupsBeingShown = useSetRecoilState(activeGenIdxAtom);
  const saveSection = useSaveSection();

  const iterations = 10000;

  const algo = () => {
    // Get list of active IDs
    let ids = Object.values(relations)
      .filter((d) => d.active) // Remove inactive students
      .map((d) => d.id); // Return just he IDs

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

    const idxOfNewGen = gens.length;

    setGens((oldGens) => [
      ...oldGens,
      {
        id: idxOfNewGen,
        active: true,
        date_created: Math.round(Date.now() / 1000), // Gives datetime in epoch format (no ms)
        group_size: size,
        students: count,
        extras: extras.const,
        groups: groupings,
      },
    ]);

    // Set New Generation as the one being displayed
    setGroupsBeingShown(idxOfNewGen);

    // Triggers a save if user is signed in
    if (user) saveSection();
  };

  return algo;
};

export default useGenNewGen;
