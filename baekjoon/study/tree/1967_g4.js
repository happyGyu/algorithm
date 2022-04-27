const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((n) => Number(n)));

const totalNum = input[0][0];
const tree = {};
for (let i = 1; i < input.length; i++) {
  if (tree[input[i][0]]) {
    tree[input[i][0]].push(input[i].slice(1));
  } else {
    tree[input[i][0]] = [input[i].slice(1)];
  }
}

function solve(nodeNum, sum) {
  const sonNodes = tree[nodeNum];
  const summed = [];
  if (!sonNodes) {
    return sum;
  } else {
    for (const sonNode of sonNodes) {
      summed.push(solve(sonNode[0], sum + sonNode[1]));
    }
  }
  return Math.max(...summed);
}

let diameter = 0;
for (let i = 1; i <= totalNum; i++) {
  if (tree[i]) {
    const sons = tree[i];
    const summed = [];
    for (const son of sons) {
      summed.push(solve(son[0], son[1]));
    }
    summed.sort((a, b) => b - a);
    const currDiameter = summed.slice(0, 2).reduce((acc, n) => acc + n);
    diameter = Math.max(diameter, currDiameter);
  }
}
console.log(diameter);
