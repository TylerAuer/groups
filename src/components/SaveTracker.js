/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { SAVE_STATUS } from '../constants/saveStatus';
import useSaveSection from '../hooks/useSaveSection';
import usePollForStaleData from '../hooks/usePollForStaleData';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userDataAtom, dataIsSavedAtom } from '../recoil/atoms';
import { useEffect } from 'react';

const SaveTracker = () => {
  const save = useSaveSection();
  const data = useRecoilValue(userDataAtom);
  const [saveStatus, setSaveStatus] = useRecoilState(dataIsSavedAtom);
  const pollForStaleData = usePollForStaleData();

  const statusCss = css`
    display: inline-block;
    color: grey;
    font-style: italic;
  `;

  // Checks to see if local data is stale relative to the server
  // Could occur if user has multiple instances of app open
  useEffect(() => {
    const pollAtInterval = setInterval(
      () => pollForStaleData(saveStatus),
      10 * 1000
    );

    return () => {
      clearInterval(pollAtInterval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, saveStatus]);

  // Debounces saved data as user makes changes
  useEffect(() => {
    setSaveStatus(SAVE_STATUS.SAVING);
    const debouncedSectionSave = setTimeout(() => {
      if (data) save();
    }, 1500);

    return () => {
      clearTimeout(debouncedSectionSave);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return <div css={statusCss}>{saveStatus}</div>;
};

export default SaveTracker;
