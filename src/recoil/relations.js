import { selector } from 'recoil';
import { generationState } from './generation';
import { studentState } from './student';

// SELECTORS
export const relationGraph = selector({
  key: 'relationGraph',
  get: ({ get }) => {
    const generations = get(generationState);
    const students = get(studentState);

    const graph = {};

    generations.forEach((generation) => {
      if (!generation.active) {
        return;
      }

      const { groups } = generation;
      console.log(groups);
      // graph[s] = s.history;
    });
  },
});
