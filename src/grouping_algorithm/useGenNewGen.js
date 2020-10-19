import setGroupSizes from './setGroupSizes';
import shuffle from './shuffle';
import calcGroupWeight from './calcGroupWeight';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { relationGraph } from '../recoil/relations';
import { activeGenerationId } from '../recoil/generation';
import {
  groupSizeSetting,
  extrasSetting,
  generationState,
} from '../recoil/generation';

const useGenNewGen = () => {
  const relations = useRecoilValue(relationGraph);
  const size = useRecoilValue(groupSizeSetting);
  const extras = useRecoilValue(extrasSetting);
  const [gens, setGens] = useRecoilState(generationState);
  const setGroupsBeingShown = useSetRecoilState(activeGenerationId);

  const iterations = 10000;

  const algo = () => {
    // Get list of active IDs
    let ids = Object.values(relations)
      .filter((d) => d.active) // Remove inactive students
      .map((d) => d.id); // Return just he IDs

    // Determine group sizes
    const count = ids.length;
    const groupSizes = setGroupSizes(count, size, extras);

    // Placeholders to track best grouping in iterations below
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

    // Update generations state
    const genIndex = gens.length;
    setGens([
      ...gens,
      {
        id: genIndex,
        active: true,
        date_created: Math.round(Date.now() / 1000), // Gives datetime in epoch format (no ms)
        group_size: size,
        students: count,
        extras: extras.const,
        groups: groupings,
      },
    ]);

    // Set New Generation as the one being displayed
    setGroupsBeingShown(genIndex);
  };

  return algo;
};

export default useGenNewGen;
