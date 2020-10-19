import { EXTRA_OPTIONS } from '../constants/extraOptions';

export default function setGroupSizes(
  count,
  groupSize,
  extraSetting = EXTRA_OPTIONS.SPLIT_ACROSS
) {
  let groupSizes = [];

  while (count >= groupSize && count > 0) {
    groupSizes.push(groupSize);
    count -= groupSize;
  }

  if (extraSetting === EXTRA_OPTIONS.ONE_LARGER) {
    groupSizes[0] += count;
  } else if (extraSetting === EXTRA_OPTIONS.ONE_SMALLER) {
    groupSizes.push(count);
  } else if (extraSetting === EXTRA_OPTIONS.SPLIT_ACROSS) {
    for (let i = 0; i < count; i++) {
      groupSizes[i]++;
    }
  }

  return groupSizes;
}
