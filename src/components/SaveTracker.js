/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { SAVE_STATUS } from '../constants/saveStatus';
import useSaveSection from '../hooks/useSaveSection';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  userAtom,
  sectionListAtom,
  genListAtom,
  studentListAtom,
  dataIsSavedAtom,
} from '../recoil/atoms';
import { useEffect } from 'react';

const SaveTracker = () => {
  const save = useSaveSection();
  const user = useRecoilValue(userAtom);
  const sections = useRecoilValue(sectionListAtom);
  const gens = useRecoilValue(genListAtom);
  const students = useRecoilValue(studentListAtom);
  const [saveStatus, setSaveStatus] = useRecoilState(dataIsSavedAtom);

  const statusCss = css`
    display: inline-block;
    color: grey;
    font-style: italic;
  `;

  useEffect(() => {
    setSaveStatus(SAVE_STATUS.SAVING);
    const debouncedSectionSave = setTimeout(() => {
      if (user) save();
    }, 1000);

    return () => {
      clearTimeout(debouncedSectionSave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, sections, gens, students]);

  return <div css={statusCss}>{saveStatus}</div>;
};

export default SaveTracker;
