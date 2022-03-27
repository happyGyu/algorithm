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
  let start = 0;
  let end = list.length - 1;
  let find = false;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (list[mid] < testCase) {
      start = mid + 1;
    } else if (list[mid] > testCase) {
      end = mid - 1;
    } else {
      find = true;
      break;
    }
  }
  answer += find ? "1 " : "0 ";
}
console.log(answer);
