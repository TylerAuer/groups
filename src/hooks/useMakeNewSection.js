import cloneDeep from 'lodash.clonedeep';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  activeSectionIdxAtom,
  activeGenIdxAtom,
  userDataAtom,
} from '../recoil/atoms';
import { sectionList } from '../recoil/selectors/sections';

const useMakeNewSection = () => {
  const sections = useRecoilValue(sectionList);
  const setData = useSetRecoilState(userDataAtom);
  const setSectionIdx = useSetRecoilState(activeSectionIdxAtom);
  const setActiveGenIdx = useSetRecoilState(activeGenIdxAtom);

  const makeNewSection = async () => {
    await fetch('/data/section/new', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => {
        setData((prev) => {
          const next = cloneDeep(prev);
          next.GroupUsSections = [...next.GroupUsSections, data];

          return next;
        });
        setSectionIdx(sections.length);
        setActiveGenIdx(null);
      });
  };

  return makeNewSection;
};

export default useMakeNewSection;
