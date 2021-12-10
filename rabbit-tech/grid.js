const matrix = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
];

const m = 6;
const n = 6;

const dir = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

function isValidCell(i, j) {
  if (i >= 0 && j >= 0 && i < m && j < n && matrix[i][j] > 0) {
    return true;
  }
  return false;
}

function findConnectedCells(i, j) {
  let len = 0;
  matrix[i][j] = 0;

  for (let k = 0; k < dir.length; k++) {
    let new_i = i + dir[k][0];
    let new_j = j + dir[k][1];

    if (isValidCell(new_i, new_j)) {
      len += findConnectedCells(new_i, new_j);
    }
  }

  len++;
  return len;
}

const obj = {};

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (matrix[i][j] > 0) {
      const len = findConnectedCells(i, j);
      if (len in obj) {
        obj[len]++;
      } else {
        obj[len] = 1;
      }
    }
  }
}

const queries = [6, 1, 8, 2];
const output = [];
for (const query of queries) {
  if (query in obj) {
    output.push(obj[query]);
  } else {
    output.push(0);
  }
}

console.log(output);
