//18310
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const homeCount = +input[0];
const homePos = input[1]
  .split(" ")
  .map((n) => +n)
  .sort((a, b) => a - b);

console.log(
  homeCount % 2
    ? homePos[Math.floor(homeCount / 2)]
    : homePos[homeCount / 2 - 1]
);
