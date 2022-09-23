const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const powers = input[1]
  .trim()
  .split(" ")
  .map((n) => +n);

const dp = new Array(powers.length).fill(1);

for (let i = 1; i < powers.length; i++) {
  for (let j = 0; j < i; j++) {
    if (powers[j] > powers[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(dp.length - Math.max(...dp));
