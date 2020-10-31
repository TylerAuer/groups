import { SAVE_STATUS } from '../constants/saveStatus';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { activeSectionIdxAtom, dataIsSavedAtom } from '../recoil/atoms';
import {
  saveSectionPrimaryKeySelector,
  saveDataSelector,
} from '../recoil/selectors/save';
import { sectionList } from '../recoil/selectors/sections';

const useSaveSection = () => {
  const key = useRecoilValue(saveSectionPrimaryKeySelector);
  const data = useRecoilValue(saveDataSelector);
  const setSave = useSetRecoilState(dataIsSavedAtom);
  const setSectionList = useSetRecoilState(sectionList);
  const activeSectionIdx = useRecoilValue(activeSectionIdxAtom);

  const saveSection = async () => {
    // Doesn't take effect until AFTER the fetch request has been made,
    // So there is also a +1 on the save selector
    fetch(`/data/section/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setSave(SAVE_STATUS.SAVED);
        } else if (res.status === 304) {
          setSave(SAVE_STATUS.SAVED);
        } else {
          setSave(SAVE_STATUS.ERROR);
        }
      })
      .catch((err) => {
        setSave(SAVE_STATUS.ERROR);
        console.log(err);
      });
  };

  return saveSection;
};

export default useSaveSection;
