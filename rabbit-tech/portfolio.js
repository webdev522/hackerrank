function maxValue(n, rounds) {
  const acc = {};
  for (const [s, e, c] of rounds) {
    acc[s] = (acc[s] || 0) + c;
    acc[e + 1] = (acc[e + 1] || 0) - c;
  }

  let m = 0;
  let l = 0;
  for (let i = 0; i < n + 1; i++) {
    const curr = acc[i] || 0;
    l += curr;
    if (l > m) {
      m = l;
    }
  }

  return m;
}

console.log(
  maxValue(5, [
    [1, 2, 10],
    [2, 4, 5],
    [3, 5, 12],
  ])
);
