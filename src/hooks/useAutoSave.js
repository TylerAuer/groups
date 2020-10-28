import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { sectionList } from '../recoil/section';

const useAutoSave = () => {
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [dataToSave, setDataToSave] = useState(null);

  const initDelayedSave = setTimeout(() => {
    fetch('data/save', {
      method: 'PUT',
      body: 'TEST',
    })
      .then(() => {
        unsavedChanges(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, 3000);
};

export default useAutoSave;
