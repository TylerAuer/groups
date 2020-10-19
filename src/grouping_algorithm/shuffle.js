export default function shuffle(classList) {
  // Fisher-Yates Shuffle
  let unsortedElementsCount = classList.length;

  while (unsortedElementsCount) {
    const randIndex = Math.floor(Math.random() * unsortedElementsCount);
    unsortedElementsCount--;

    // Swap randomly chosen element with
    [classList[unsortedElementsCount], classList[randIndex]] = [
      classList[randIndex],
      classList[unsortedElementsCount],
    ];
  }

  return classList;
}
