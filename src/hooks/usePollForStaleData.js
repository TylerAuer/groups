import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SAVE_STATUS } from '../constants/saveStatus';
import { versionMap } from '../recoil/selectors/versions';
import { dataIsSavedAtom } from '../recoil/atoms';
import useLoadUser from './useLoadData';

const usePollForStaleData = () => {
  const versions = useRecoilValue(versionMap);
  const setSave = useSetRecoilState(dataIsSavedAtom);
  const loadData = useLoadUser();

  const pollForStaleData = async (saveStatus) => {
    console.log('Polling triggered', saveStatus);
    // Don't poll unless local data has been saved
    if (saveStatus !== SAVE_STATUS.SAVED) return;

    setSave(SAVE_STATUS.POLLING);

    const res = await fetch('/data/check', {
      method: 'PUT',
      body: JSON.stringify(versions),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Versions are out-of-date, so refresh
    if (res.status === 205) {
      setSave(SAVE_STATUS.STALE);
      loadData();
    } else {
      setSave(SAVE_STATUS.SAVED);
    }
  };

  return pollForStaleData;
};

export default usePollForStaleData;
