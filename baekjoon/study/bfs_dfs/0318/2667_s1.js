const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const size = Number(input[0]);
const map = input.slice(1).map((line) => line.trim().split(""));

const visited = Array.from({ length: size }, () => Array.from({ length: size }, () => false));

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const answer = [];

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (map[i][j] === "0" || visited[i][j]) continue;

    let currAnswer = 1;
    const stack = [[i, j]];
    visited[i][j] = true;

    while (stack.length !== 0) {
      const curr = stack.pop();
      for (let k = 0; k < 4; k++) {
        const tempX = curr[0] + dx[k];
        const tempY = curr[1] + dy[k];
        if (tempX < 0 || tempX >= size || tempY < 0 || tempY >= size) continue;
        if (map[tempX][tempY] === "1" && !visited[tempX][tempY]) {
          stack.push([tempX, tempY]);
          visited[tempX][tempY] = true;
          currAnswer++;
        }
      }
    }
    answer.push(currAnswer);
  }
}
const printedAnswer = `${answer.length}
${answer
  .sort(() => {
    a - b;
  })
  .join("\n")}`;

console.log(printedAnswer);
