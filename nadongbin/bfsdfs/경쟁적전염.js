//18405
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map((n) => +n);
const virusMap = input.slice(1, -1).map((line) =>
  line
    .trim()
    .split(" ")
    .map((n) => {
      return {
        virus: +n,
        time: 0,
      };
    })
);
const [targetTime, x, y] = input[N + 1].split(" ").map((n) => +n);
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    const queue = [[i, j]];
    while (queue.length) {
      const currentPos = queue.shift();
      const { virus, time } = virusMap[currentPos[0]][currentPos[1]];
      if (time >= targetTime) break;
      for (let k = 0; k < 4; k++) {
        const tempX = currentPos[0] + dx[k];
        const tempY = currentPos[1] + dy[k];
        if (tempX < 0 || tempY < 0 || tempX >= N || tempY >= N) continue;
        const tempPosInfo = virusMap[tempX][tempY];
        if (
          tempPosInfo.virus === 0 ||
          (tempPosInfo.virus > virus && tempPosInfo.time === time + 1) ||
          tempPosInfo.time > time + 1
        ) {
          virusMap[tempX][tempY] = { virus, time: time + 1 };
        }
      }
    }
  }
}

console.log(virusMap[x - 1][y - 1].virus);
