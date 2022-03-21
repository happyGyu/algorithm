const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const list = input[1]
  .trim()
  .split(" ")
  .map((n) => Number(n))
  .sort((a, b) => a - b);
const testCases = input[3]
  .trim()
  .split(" ")
  .map((n) => Number(n));

let answer = "";
for (let testCase of testCases) {
  const left = solution(testCase, "left");
  const right = solution(testCase, "right");
  answer += `${right - left} `;
}
console.log(answer);

function solution(testCase, side) {
  let start = 0;
  let end = list.length;
  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid] < testCase) {
      start = mid + 1;
    } else if (list[mid] > testCase) {
      end = mid;
    } else {
      if (side === "left") end = mid;
      else start = mid + 1;
    }
  }
  return start;
}
