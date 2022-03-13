const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((n) => Number(n)));

const dividers = [];
for (let i = 1; i < input.length; i++) {
  if (input[i].length === 3) dividers.push(i);
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function calAnswer(divider) {
  const testCase = input.slice(divider + 1, divider + 1 + input[divider][2]);
  let answer = 0;
  while (testCase.length !== 0) {
    const queue = [testCase.pop()];
    while (queue.length !== 0) {
      const curr = queue.pop();
      for (let dir = 0; dir < 4; dir++) {
        const tempX = curr[0] + dx[dir];
        const tempY = curr[1] + dy[dir];
        const result = find([tempX, tempY].toString(), testCase);
        if (result) queue.push(result);
      }
    }
    answer++;
  }
  return answer;
}

function find(string, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (string == arr[i]) {
      return arr.splice(i, 1)[0];
    }
  }
  return false;
}

dividers.forEach((divider) => console.log(calAnswer(divider)));
