import { selector } from 'recoil';
import { atom } from 'recoil';

const testStub = [
  {
    name: 'Tyler',
    id: 0,
    active: true,
  },
  {
    name: 'Jessica',
    id: 1,
    active: true,
  },
  {
    name: 'Hannah',
    id: 2,
    active: true,
  },
  {
    name: 'Avery',
    id: 3,
    active: true,
  },
  {
    name: 'Maisie',
    id: 4,
    active: true,
  },
  {
    name: 'Doug',
    id: 5,
    active: true,
  },
];

// Atoms
export const studentState = atom({
  key: 'studentState',
  default: [],
});

// Count of students
export const countOfStudents = selector({
  key: 'countOfStudents',
  get: ({ get }) => {
    return get(studentState).length;
  },
});
