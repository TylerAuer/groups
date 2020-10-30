import { SAVE_STATUS } from '../constants/saveStatus';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { dataIsSavedAtom, sectionVersionAtom } from '../recoil/atoms';
import {
  saveSectionPrimaryKeySelector,
  saveDataSelector,
} from '../recoil/selectors/save';

const useSaveSection = () => {
  const key = useRecoilValue(saveSectionPrimaryKeySelector);
  const data = useRecoilValue(saveDataSelector);
  const setVersion = useSetRecoilState(sectionVersionAtom);
  const setSave = useSetRecoilState(dataIsSavedAtom);

  const saveSection = async () => {
    // Doesn't take effect until AFTER the fetch request has been made,
    // So there is also a +1 on the save selector
    setVersion((prev) => prev + 1);

    fetch(`/data/section/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200 || res.status === 304) {
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
