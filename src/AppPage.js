import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataAtom } from './recoil/atoms';
import useLoadData from './hooks/useLoadData';
import EditableSectionTitle from './components/EditableSectionTitle';
import GroupList from './components/GroupList';
import GenerationList from './components/GenerationList';
import StudentList from './components/StudentList';

const AppPage = () => {
  const data = useRecoilValue(userDataAtom);
  const loadData = useLoadData();

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!data) return null;

  return (
    <section>
      {/* <EditableSectionTitle /> */}
      <GroupList />
      <GenerationList />
      <StudentList />
    </section>
  );
};

export default AppPage;
