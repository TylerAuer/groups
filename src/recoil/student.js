import { selector } from 'recoil';
import { atom } from 'recoil';

const testStub = [
  {
    name: 'Tyler',
    id: 0,
    history: [],
    active: true,
  },
  {
    name: 'Jessica',
    id: 1,
    history: [],
    active: true,
  },
  {
    name: 'Hannah',
    id: 2,
    history: [],
    active: true,
  },
  {
    name: 'Avery',
    id: 3,
    history: [],
    active: true,
  },
];

// Atoms
export const studentState = atom({
  key: 'studentState',
  default: testStub,
});

// Count of students
export const countOfStudents = selector({
  key: 'countOfStudents',
  get: ({ get }) => {
    return get(studentState).length;
  },
});
