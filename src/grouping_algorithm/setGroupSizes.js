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

  // No extras so work is done
  if (count === 0) {
    return groupSizes;
  }

  switch (extraSetting) {
    // Dump all extras into the first group
    case EXTRA_OPTIONS.ONE_LARGER:
      groupSizes[0] += count;
      break;

    // Pass out extras into each group
    case EXTRA_OPTIONS.SPLIT_ACROSS:
      while (count > 0) {
        for (let i = 0; i < groupSizes.length && i < count; i++) {
          groupSizes[i]++;
          count--;
        }
      }
      break;

    // Place all extras in a single extra group
    case EXTRA_OPTIONS.ONE_SMALLER:
    default:
      groupSizes.push(count);
      break;
  }

  return groupSizes;
}
