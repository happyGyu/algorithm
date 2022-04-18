const input = require("fs").readFileSync("./test.txt").toString().trim().split("\r\n");
const [row, col] = input[0]
  .trim()
  .split(" ")
  .map((n) => Number(n));
const map = input.slice(1, row + 1).map((line) => line.trim().split(""));
const testCases = input.slice(row + 1);
const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

const hash = {};

function hashing(x, y, prevString) {
  const currString = prevString + map[x][y];
  hash[currString] = hash[currString] ? hash[currString] + 1 : 1;
  if (currString.length < 5) {
    for (let i = 0; i < 8; i++) {
      const nextX = (x + dx[i] + row) % row;
      const nextY = (y + dy[i] + col) % col;
      hashing(nextX, nextY, currString);
    }
  }
}

for (let i = 0; i < row; i++) {
  for (let j = 0; j < col; j++) {
    hashing(i, j, "");
  }
}

answer = "";
for (const testCase of testCases) {
  answer += `${hash[testCase] ?? 0}\n`;
}
console.log(answer);
