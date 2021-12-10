function findLoc(el, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > el) {
      return i - 1;
    }
  }
  return arr.length;
}
function lastStoneWeight(weights) {
  weights.sort((a, b) => a - b);

  while (weights.length > 1) {
    const last1 = weights.pop();
    const last2 = weights.pop();

    const diff = last1 - last2;
    if (diff) {
      weights.splice(findLoc(diff, weights) + 1, 0, diff);
    }
  }

  if (weights.length === 1) {
    return weights;
  }

  return 0;
}
