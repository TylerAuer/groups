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
  const setAwaitingConfirmation = useSetRecoilState(
    awaitingSaveConfirmationAtom
  );
  const setVersion = useSetRecoilState(sectionVersionAtom);

  const saveSection = async () => {
    setAwaitingConfirmation(true);

    // Doesn't take effect until AFTER the fetch request has been made,
    // So there is also a +1 on the save selector
    setVersion((prev) => prev + 1);

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
