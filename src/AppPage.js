import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { sectionListAtom, userAtom } from './recoil/atoms';
import useLoadUser from './hooks/useLoadUser';
import EditableSectionTitle from './components/EditableSectionTitle';
import GroupList from './components/GroupList';
import GenerationList from './components/GenerationList';
import StudentList from './components/StudentList';

const AppPage = () => {
  const user = useRecoilValue(userAtom);
  const sections = useRecoilValue(sectionListAtom);
  const load = useLoadUser();

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user || !sections) return null;

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
