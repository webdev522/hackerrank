"use strict";

function sockMerchant(n, ar) {
  let count = 0;
  let colors = {};

  for (const color of ar) {
    if (colors[color]) {
      count++;
      delete colors[color];
    } else {
      colors[color] = true;
    }
  }

  return count;
}

function main() {
  const n = 9;
  const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];

  const result = sockMerchant(n, ar);

  console.log(result);
}

main();
