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

          // Choose the correct active idx
          if (index === idx) {
            // If deleting the currently open section
            setIdx(0);
          } else if (index < idx) {
            setIdx((prev) => prev - 1);
          }

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
        console.error(err);
      });
  };

  return deleteSection;
};

export default useDeleteSection;
