import { SAVE_STATUS } from '../constants/saveStatus';
import { useSetRecoilState, useRecoilState } from 'recoil';
import {
  dataIsSavedAtom,
  userDataAtom,
  activeSectionIdxAtom,
} from '../recoil/atoms';
import cloneDeep from 'lodash.clonedeep';

const useDeleteSection = () => {
  const [data, setData] = useRecoilState(userDataAtom);
  const setSave = useSetRecoilState(dataIsSavedAtom);
  const [idx, setIdx] = useRecoilState(activeSectionIdxAtom);

  const deleteSection = async (id, index) => {
    // If there is only one section left, replace the one being deleted with a
    // blank section
    if (data.GroupUsSections.length === 1) {
      setData((prev) => {
        const next = cloneDeep(prev);

        next.GroupUsSections[0] = {
          ...next.GroupUsSections[0],
          section_info: {
            ...next.GroupUsSections[0].section_info,
            generations: [],
            students: [],
            name: 'Blank Section',
          },
        };

        return next;
      });

      return;
    }

    fetch(`/data/section/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 200) {
          setSave(SAVE_STATUS.SAVED);

          // If deleting the section that is currently open, set the active
          // section to be the first in the list
          if (index === idx) setIdx(0);

          setData((prev) => {
            const next = cloneDeep(prev);
            next.GroupUsSections.splice(index, 1);

            return next;
          });
        } else {
          setSave(SAVE_STATUS.ERROR);
        }
      })
      .catch((err) => {
        setSave(SAVE_STATUS.ERROR);
        console.log(err);
      });
  };

  return deleteSection;
};

export default useDeleteSection;
