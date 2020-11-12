import React from 'react';
import { useRecoilValue } from 'recoil';
import { genList } from '../recoil/selectors/generations';
import { studentList } from '../recoil/selectors/students';
import HistoryArray from './HistoryArray';
import HistoryCollapsing from './HistoryCollapsing';

const History = () => {
  const gens = useRecoilValue(genList);
  const students = useRecoilValue(studentList);

  if (!gens.length) return null;

  return (
    <section>
      <h2>History</h2>
      {students.length > 23 ? <HistoryCollapsing /> : <HistoryArray />}
    </section>
  );
};

export default History;
