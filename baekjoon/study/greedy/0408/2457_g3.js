const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");

const accMonth = [];
const month = [0, 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
month.reduce((acc, n) => {
  accMonth.push(acc + n);
  return acc + n;
}, 0);
const flowers = input.slice(1).map((line) => {
  const parsed = line
    .trim()
    .split(" ")
    .map((n) => Number(n));
  const start = accMonth[parsed[0]] + parsed[1];
  const end = accMonth[parsed[2]] + parsed[3] - 1;
  return [start, end];
});

const sortedByEarlyStart = flowers.slice().sort((a, b) => a[0] - b[0]);
const sortedByLateEnd = flowers.slice().sort((a, b) => b[1] - a[1]);

let left = accMonth[3] + 1;
let right = accMonth[11] + 30;

let answer = 0;
while (left <= right) {
  let lateEnd;
  let earlyStart;
  for (const flower of sortedByLateEnd) {
    if (flower[0] <= left && flower[1] >= left) {
      lateEnd = flower;
      break;
    }
  }
  for (const flower of sortedByEarlyStart) {
    if (flower[1] >= right && flower[0] <= right) {
      earlyStart = flower;
      break;
    }
  }
  if (!lateEnd || !earlyStart) {
    answer = 0;
    break;
  }
  if (lateEnd[1] - left > right - earlyStart[0]) {
    left = lateEnd[1] + 1;
  } else {
    right = earlyStart[0] - 1;
  }
  answer++;
}
console.log(answer);
