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

export const studentState = atom({
  key: 'studentState',
  default: testStub,
});
