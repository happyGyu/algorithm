const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const [homeCount, deviceCount] = input[0]
  .trim()
  .split(" ")
  .map((n) => +n);
const homePositions = input
  .slice(1)
  .map((n) => +n)
  .sort((a, b) => a - b);

let min = 0;
let max = Math.floor(
  homePositions[homePositions.length - 1] / (deviceCount - 1)
);

function isValid(length) {
  let count = 0;
  let prev = homePositions[0];
  for (const homePosition of homePositions) {
    if (homePosition - prev >= length) {
      prev = homePosition;
      count++;
    }
  }
  return count >= deviceCount - 1;
}

while (min < max) {
  const currentLength = Math.ceil((min + max) / 2);
  if (isValid(currentLength)) {
    min = currentLength;
  } else {
    max = currentLength - 1;
  }
}
console.log(max);
