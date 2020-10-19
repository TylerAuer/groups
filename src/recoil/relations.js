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

    // Populate the graph with node for each student
    students.forEach((s) => {
      graph[s.id] = {
        name: s.name,
        id: s.id,
        relations: {},
        active: s.active,
      };
    });

    // Iterate over each generation
    generations.forEach((generation) => {
      if (!generation.active) {
        return;
      }

      // For each group, determine groups value (more kids less value)
      const { groups } = generation;
      groups.forEach((group) => {
        // Smaller groups are worth more (up to 8)
        // Larger groups are worth less
        const groupVal = Math.max(1, 10 - group.length);

        // Update nodes with points for who's been with whom
        for (let first = 0; first < group.length; first++) {
          for (let second = first + 1; second < group.length; second++) {
            const id1 = group[first];
            const id2 = group[second];

            // If relation exists update otherwise create
            if (graph[id1].relations[id2]) {
              graph[id1].relations[id2].points += groupVal;
              graph[id1].relations[id2].count++;
            } else {
              graph[id1].relations[id2] = {
                points: groupVal,
                count: 1,
                name: students[second].name,
              };
            }

            // Add the relation to the second person as well.
            // This is a bit redundant but will be handy if I want to
            // display a matrix showing who has been with whom
            if (graph[id2].relations[id1]) {
              graph[id2].relations[id1].points += groupVal;
              graph[id2].relations[id1].count++;
            } else {
              graph[id2].relations[id1] = {
                points: groupVal,
                count: 1,
                name: students[second].name,
              };
            }
          }
        }
      });
    });
    return graph;
  },
});
