function countingValleys(steps, path) {
  let count = 0;
  let level = 0;

  for (let i = 0; i < steps; i++) {
    let p = path.charAt(i);

    if (p === "U") {
      if (level === -1) {
        count++;
      }
      level++;
    } else {
      level--;
    }
  }

  return count;
}

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(8, "DDUUUUDD"));
