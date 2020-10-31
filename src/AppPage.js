import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataAtom } from './recoil/atoms';
import useLoadData from './hooks/useLoadData';
import EditableSectionTitle from './components/EditableSectionTitle';
import GroupList from './components/GroupList';
import GenerationList from './components/GenerationList';
import StudentList from './components/StudentList';

import { activeGenIdxAtom, activeSectionIdxAtom } from './recoil/atoms';
import { genList } from './recoil/selectors/generations';
import { studentList } from './recoil/selectors/students';

const AppPage = () => {
  const data = useRecoilValue(userDataAtom);
  const loadData = useLoadData();

  const genIdx = useRecoilValue(activeGenIdxAtom);
  const sectionIdx = useRecoilValue(activeSectionIdxAtom);
  const gens = useRecoilValue(genList);
  const students = useRecoilValue(studentList);

  console.log('data', data);
  console.log('genIdx', genIdx);
  console.log('sectionIdx', sectionIdx);
  console.log('gensList', gens);
  console.log('studentsList', students);
  console.log(' ');

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;

  return (
    <section>
      <EditableSectionTitle />
      <GroupList />
      <GenerationList />
      <StudentList />
    </section>
  );
};

export default AppPage;
