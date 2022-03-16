const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const testNum = Number(input[0]);
let pointer = 0;
const convertObj = { "#": 0, "*": 0 };

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
function solution(map, size, firePosArr, startPos) {
  const fireQueue = firePosArr;
  let firePointer = 0;
  while (fireQueue.length > firePointer) {
    const currFire = fireQueue[firePointer];
    const time = map[currFire[0]][currFire[1]];
    for (let i = 0; i < 4; i++) {
      const tempX = currFire[0] + dx[i];
      const tempY = currFire[1] + dy[i];
      if (tempX < 0 || tempX >= size[1] || tempY < 0 || tempY >= size[0] || map[tempX][tempY] !== undefined)
        continue;
      map[tempX][tempY] = time + 1;
      fireQueue.push([tempX, tempY]);
    }
    firePointer++;
  }

  const runQueue = [{ pos: startPos, time: 0 }];
  let runPointer = 0;
  while (runQueue.length > runPointer) {
    const curr = runQueue[runPointer];
    for (let i = 0; i < 4; i++) {
      const tempX = curr.pos[0] + dx[i];
      const tempY = curr.pos[1] + dy[i];
      if (tempX < 0 || tempX >= size[1] || tempY < 0 || tempY >= size[0]) {
        return curr.time + 1;
      }
      if (map[tempX][tempY] <= curr.time + 1) continue;
      runQueue.push({ pos: [tempX, tempY], time: curr.time + 1 });
    }
    runPointer++;
  }
  return "IMPOSSIBLE";
}

let answer = "";
for (let i = 0; i < testNum; i++) {
  pointer++;
  const size = input[pointer]
    .trim()
    .split(" ")
    .map((n) => Number(n));
  const map = [];
  const firePosArr = [];
  let startPos;
  for (let j = 0; j < size[1]; j++) {
    pointer++;
    const currLine = input[pointer].trim().split("");
    const converted = [];
    for (let k = 0; k < size[0]; k++) {
      if (currLine[k] === "*") {
        firePosArr.push([j, k]);
      } else if (currLine[k] === "@") {
        startPos = [j, k];
      }
      converted.push(convertObj[currLine[k]]);
    }
    map.push(converted);
  }
  answer += `${solution(map, size, firePosArr, startPos)}\n`;
}
console.log(answer);
