import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  awaitingSaveConfirmationAtom,
  sectionVersionAtom,
} from '../recoil/atoms';
import {
  saveSectionPrimaryKeySelector,
  saveDataSelector,
} from '../recoil/selectors/save';

const useSaveSection = () => {
  const key = useRecoilValue(saveSectionPrimaryKeySelector);
  const data = useRecoilValue(saveDataSelector);
  const setVersion = useSetRecoilState(sectionVersionAtom);

  const saveSection = async () => {
    // Doesn't take effect until AFTER the fetch request has been made,
    // So there is also a +1 on the save selector
    setVersion((prev) => prev + 1);

    // TODO: Change state on successful response to note that changes are saved
    fetch(`/data/section/${key}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  return saveSection;
};

export default useSaveSection;
