function jumpingOnClouds(c) {
  if (c[0] === 1) return 0;

  let jumps = 0;
  let i = 0;
  let n = c.length;

  while (i < n - 1) {
    if (i + 2 <= n - 1 && c[i + 2] === 0) {
      i += 2;
      jumps++;
    } else if (i + 1 <= n - 1 && c[i + 1] === 0) {
      i += 1;
      jumps++;
    } else {
      return 0;
    }
  }

  return jumps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0]));
