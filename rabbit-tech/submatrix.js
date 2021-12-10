function largestArea(samples) {
  // Write your code here
  let m = samples.length;
  let n = samples[0].length;

  let s = [];

  for (let i = 0; i < m; i++) {
    s[i] = [];
    for (let j = 0; j < n; j++) {
      s[i][j] = 0;
    }
  }

  let max_s = s[0][0];

  for (let i = 0; i < m; i++) {
    s[i][0] = samples[i][0];
  }

  for (let j = 0; j < n; j++) {
    s[0][j] = samples[0][j];
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (samples[i][j] === 1) {
        s[i][j] =
          Math.min(s[i][j - 1], Math.min(s[i - 1][j], s[i - 1][j - 1])) + 1;
      } else {
        s[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (s[i][j] > max_s) {
        max_s = s[i][j];
      }
    }
  }

  return max_s;
}
