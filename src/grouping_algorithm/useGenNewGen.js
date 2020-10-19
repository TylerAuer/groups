import React from 'react';
import setGroupSizes from './setGroupSizes';
import shuffle from './shuffle';
import calcGroupWeight from './calcGroupWeight';
import { useRecoilState, useRecoilValue } from 'recoil';
import { relationGraph } from '../recoil/relations';
import { groupSizeSetting, extrasSetting } from '../recoil/generation';

const useGenNewGen = () => {
  const relations = useRecoilValue(relationGraph);
  const size = useRecoilValue(groupSizeSetting);
  const extras = useRecoilValue(extrasSetting);
  const iterations = 100;

  const algo = () => {
    // console.log('Graph:', relations);
    // console.log('Group Size:', size);
    // console.log('Extras:', extras);

    // Get list of active IDs
    let ids = Object.values(relations)
      .filter((d) => d.active) // Remove inactive students
      .map((d) => d.id); // Return just he IDs

    // Determine group sizes
    const count = ids.length;
    const groupSizes = setGroupSizes(count, size, extras);

    // Minimize total points over 10000 iterations
    let minWeight = Infinity;
    let groupings = [];

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

    console.log(minWeight, groupings);

    // Update states of everything
  };

  return algo;
};

export default useGenNewGen;
