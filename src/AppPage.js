import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { sectionListAtom } from './recoil/atoms';
import useLoadData from './hooks/useLoadData';
import EditableSectionTitle from './components/EditableSectionTitle';
import GroupList from './components/GroupList';
import GenerationList from './components/GenerationList';
import StudentList from './components/StudentList';

const AppPage = () => {
  const loadData = useLoadData();
  const sections = useRecoilValue(sectionListAtom);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!sections.length) {
    return <h2>Loading</h2>;
  }

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
