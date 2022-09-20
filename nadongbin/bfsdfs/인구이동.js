const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [size, minDif, maxDif] = input[0]
  .trim()
  .split(" ")
  .map((n) => +n);
const countryMap = input.slice(1).map((line) =>
  line
    .trim()
    .split(" ")
    .map((n) => +n)
);

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function makeUnions() {
  const unions = [];
  const visited = new Array(size).fill().map(() => new Array(size).fill(false));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const currentUnions = [];
      const stack = [];
      if (!visited[i][j]) {
        stack.push([i, j]);
        visited[i][j] = true;
        currentUnions.push([i, j]);
      }
      while (stack.length) {
        const [x, y] = stack.pop();
        for (let k = 0; k < 4; k++) {
          const tempX = x + dx[k];
          const tempY = y + dy[k];
          if (tempX < 0 || tempY < 0 || tempX >= size || tempY >= size)
            continue;
          const dif = Math.abs(countryMap[tempX][tempY] - countryMap[x][y]);
          if (dif >= minDif && dif <= maxDif && !visited[tempX][tempY]) {
            currentUnions.push([tempX, tempY]);
            stack.push([tempX, tempY]);
            visited[tempX][tempY] = true;
          }
        }
      }
      if (currentUnions.length > 1) {
        unions.push(currentUnions);
      }
    }
  }
  return unions;
}

function move(union) {
  const totalPopulation = union.reduce(
    (acc, [x, y]) => acc + countryMap[x][y],
    0
  );
  const distributedPopulation = Math.floor(totalPopulation / union.length);
  union.forEach(([x, y]) => {
    countryMap[x][y] = distributedPopulation;
  });
}

function solution() {
  let answer = 0;
  while (true) {
    const unions = makeUnions();
    if (!unions.length) return answer;
    unions.forEach((union) => move(union));
    answer++;
  }
}

console.log(solution());
