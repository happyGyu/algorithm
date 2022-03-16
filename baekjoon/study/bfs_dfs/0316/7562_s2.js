const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) =>
    line
      .trim()
      .split(" ")
      .map((n) => Number(n))
  );
const testNum = input[0][0];

const dx = [1, 1, 2, 2, -1, -1, -2, -2];
const dy = [2, -2, 1, -1, 2, -2, 1, -1];
function solution(maxLength, startPos, endPos) {
  if (startPos.toString() === endPos.toString()) return 0;
  const map = Array.from({ length: maxLength }, () => Array.from({ length: maxLength }, () => false));
  const queue = [{ pos: startPos, cnt: 0 }];
  while (queue.length !== 0) {
    const curr = queue.shift();
    for (let i = 0; i < 8; i++) {
      const tempX = curr.pos[0] + dx[i];
      const tempY = curr.pos[1] + dy[i];
      if (tempX < 0 || tempX >= maxLength || tempY < 0 || tempY >= maxLength || map[tempX][tempY]) continue;
      if ([tempX, tempY].toString() === endPos.toString()) {
        return curr.cnt + 1;
      }
      map[tempX][tempY] = true;
      queue.push({ pos: [tempX, tempY], cnt: curr.cnt + 1 });
    }
  }
}

let answer = "";
for (let i = 0; i < testNum; i++) {
  const maxLength = input[i * 3 + 1][0];
  const startPos = input[i * 3 + 2];
  const endPos = input[i * 3 + 3];
  answer += `${solution(maxLength, startPos, endPos)}\n`;
}
console.log(answer);
