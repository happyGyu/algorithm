const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const testCaseCount = +input[0];
const testCases = [];
for (let i = 0; i < testCaseCount; i++) {
  const [height, width] = input[2 * i + 1]
    .trim()
    .split(" ")
    .map((n) => +n);
  const goldsInfo = input[2 * i + 2]
    .trim()
    .split(" ")
    .map((n) => +n);
  const goldMap = [];
  for (let i = 0; i < height; i++) {
    goldMap.push(goldsInfo.slice(i * width, (i + 1) * width));
  }
  testCases.push(goldMap);
}

function solve(goldMap) {
  const width = goldMap[0].length;
  const height = goldMap.length;
  const dp = new Array(width).fill().map(() => new Array(height).fill(-1));
  for (let i = 0; i < height; i++) {
    dp[0][i] = goldMap[i][0];
  }
  for (let i = 1; i < width; i++) {
    for (let j = 0; j < height; j++) {
      dp[i][j] =
        Math.max(
          dp[i - 1][j - 1] || -1,
          dp[i - 1][j] || -1,
          dp[i - 1][j + 1] || -1
        ) + goldMap[j][i];
    }
  }
  return Math.max(...dp[width - 1]);
}

const answers = [];
for (const testCase of testCases) {
  answers.push(solve(testCase));
}
console.log(answers.join("\n"));
