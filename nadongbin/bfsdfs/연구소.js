//14502
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map((n) => +n);
const originalMap = input
  .slice(1)
  .map((line) => line.split(" ").map((n) => +n));
const emptyArea = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (originalMap[i][j] === 0) {
      emptyArea.push([i, j]);
    }
  }
}

const getCombinations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const infest = (currentMap, startPos) => {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const stack = [startPos];
  while (stack.length) {
    const currentPos = stack.pop();
    for (let i = 0; i < 4; i++) {
      const currentX = currentPos[0] + dx[i];
      const currentY = currentPos[1] + dy[i];
      if (currentX >= N || currentY >= M || currentX < 0 || currentY < 0)
        continue;
      if (currentMap[currentX][currentY] === 0) {
        currentMap[currentX][currentY] = 2;
        stack.push([currentX, currentY]);
      }
    }
  }
};

const countSafeArea = (currentMap) => {
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (currentMap[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
};

const simulate = (currentMap) => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (currentMap[i][j] === 2) {
        infest(currentMap, [i, j]);
      }
    }
  }
  return countSafeArea(currentMap);
};

const buildWallCombinations = getCombinations(emptyArea, 3);
let answer = 0;
for (const combinationCase of buildWallCombinations) {
  const currentMap = [...originalMap.map((line) => [...line])];
  combinationCase.forEach(([wallX, wallY]) => (currentMap[wallX][wallY] = 1));
  const result = simulate(currentMap);
  answer = Math.max(answer, result);
}
console.log(answer);
