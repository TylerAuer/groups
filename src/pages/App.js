/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { userDataAtom } from '../recoil/atoms';
import useLoadData from '../hooks/useLoadData';
import EditableSectionTitle from '../components/EditableSectionTitle';
import GroupList from '../components/GroupList';
import GenerationList from '../components/GenerationList';
import StudentList from '../components/StudentList';
import Header from '../components/Header';

const AppPage = () => {
  const data = useRecoilValue(userDataAtom);
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

  if (!data) return null;

  return (
    <div css={appCss}>
      <Header />
      <section>
        <EditableSectionTitle />
        <GroupList />
        <GenerationList />
        <StudentList />
      </section>
    </div>
  );
};

export default AppPage;
