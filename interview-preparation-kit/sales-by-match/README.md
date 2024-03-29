There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

# Function Description

Complete the sockMerchant function in the editor below.

sockMerchant has the following parameter(s):

    int n: the number of socks in the pile
    int ar[n]: the colors of each sock

# Returns

    int: the number of pairs

# Input Format

The first line contains an integer
, the number of socks represented in .
The second line contains space-separated integers, , the colors of the socks in the pile.

# Sample Input

STDIN Function

---

9 n = 9

10 20 20 10 10 30 50 10 20 ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

# Sample Output

3

![image](https://user-images.githubusercontent.com/25504715/144847795-406a9177-f581-46e0-9cb3-4e9d555a1ec0.png)

# Code

```js
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
```
