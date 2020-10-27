import React from 'react';
import EditableSectionTitle from './components/EditableSectionTitle';
import GenerationList from './components/GenerationList';
import GroupList from './components/GroupList';
import StudentList from './components/StudentList';
import useValidateUser from './hooks/useValidateUser';

const AppPage = () => {
  const validateUser = useValidateUser();
  validateUser(true);

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
