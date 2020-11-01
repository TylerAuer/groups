/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { checkingForUserAtom, isSignedInAtom } from '../recoil/atoms';
import useLoadData from '../hooks/useLoadData';
import EditableSectionTitle from '../components/EditableSectionTitle';
import GroupList from '../components/GroupList';
import GenerationList from '../components/GenerationList';
import StudentList from '../components/StudentList';
import Header from '../components/Header';

const AppPage = () => {
  const checkingForUser = useRecoilValue(checkingForUserAtom);
  const isSignedIn = useRecoilValue(isSignedInAtom);
  const loadData = useLoadData();

  const appCss = css`
    width: 95%;
    max-width: 1000px;
    margin: 1rem auto;

    section {
      margin-bottom: 3rem;
    }

    h2 {
      margin: 1rem 0;
    }
  `;

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(checkingForUser);

  if (checkingForUser) return null;

  return (
    <div css={appCss}>
      <Header />
      <section>
        {isSignedIn && <EditableSectionTitle />}
        <GroupList />
        <GenerationList />
        <StudentList />
      </section>
    </div>
  );
};

export default AppPage;
