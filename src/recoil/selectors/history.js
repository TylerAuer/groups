import { selector } from 'recoil';
import { genList } from './generations';
import { studentList } from './students';

// SELECTORS
export const historyGraph = selector({
  key: 'historyGraph',
  get: ({ get }) => {
    const gens = get(genList);
    const students = get(studentList);

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
    gens.forEach((generation) => {
      // For each group, determine groups value (more kids less value)
      generation.groups.forEach((group) => {
        // Smaller groups are worth more (up to 8)
        // Larger groups are worth less
        const groupVal = Math.max(1, 10 - group.length);

        // Update nodes with points for who's been with whom
        for (let left = 0; left < group.length; left++) {
          for (let right = left + 1; right < group.length; right++) {
            const student1Id = group[left];
            const student2Id = group[right];

            // If relation exists update otherwise create
            if (graph[student1Id].relations[student2Id]) {
              graph[student1Id].relations[student2Id].points += groupVal;
              graph[student1Id].relations[student2Id].count++;
            } else {
              graph[student1Id].relations[student2Id] = {
                points: groupVal,
                count: 1,
                name: students[student2Id].name,
              };
            }

            // Add the relation to the second person as well.
            if (graph[student2Id].relations[student1Id]) {
              graph[student2Id].relations[student1Id].points += groupVal;
              graph[student2Id].relations[student1Id].count++;
            } else {
              graph[student2Id].relations[student1Id] = {
                points: groupVal,
                count: 1,
                name: students[student1Id].name,
              };
            }
          }
        }
      });
    });

    return graph;
  },
});
