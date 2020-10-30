import useSaveSection from '../hooks/useSaveSection';
import { useRecoilValue } from 'recoil';
import {
  userAtom,
  sectionListAtom,
  genListAtom,
  studentListAtom,
} from '../recoil/atoms';
import { useEffect } from 'react';

const SaveTracker = () => {
  const save = useSaveSection();
  const user = useRecoilValue(userAtom);
  const sections = useRecoilValue(sectionListAtom);
  const gens = useRecoilValue(genListAtom);
  const students = useRecoilValue(studentListAtom);

  useEffect(() => {
    // TODO: Trigger some state that says a change has not been saved

    const delayedSave = setTimeout(() => {
      if (user) save();
    }, 3000);

    return () => {
      clearTimeout(delayedSave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, sections, gens, students]);

  return null;
};

export default SaveTracker;
