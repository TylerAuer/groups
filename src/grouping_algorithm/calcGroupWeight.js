export default function calcGroupWeight(relations, idList) {
  let weight = 0;
  for (let first = 0; first < idList.length; first++) {
    for (let second = first + 1; second < idList.length; second++) {
      const id1 = idList[first];
      const id2 = idList[second];

      //
      if (relations[id1].relations[id2]) {
        weight += relations[id1].relations[id2].points;
      }
    }
  }

  return weight;
}
