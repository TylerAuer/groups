import { SAVE_STATUS } from '../constants/saveStatus';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  activeSectionIdxAtom,
  dataIsSavedAtom,
  userDataAtom,
} from '../recoil/atoms';

const useSaveSection = () => {
  const data = useRecoilValue(userDataAtom);
  const idx = useRecoilValue(activeSectionIdxAtom);
  const setSave = useSetRecoilState(dataIsSavedAtom);

  const section = data && data.GroupUsSections[idx];
  const key = section && section.id;

  const saveSection = async () => {
    fetch(`/data/section/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(section),
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
        console.error(err);
      });
  };

  return saveSection;
};

export default useSaveSection;
