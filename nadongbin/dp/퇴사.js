const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) =>
    line
      .trim()
      .split(" ")
      .map((n) => +n)
  );

function calIncome(day, passDay) {
  if (day < 1) return 0;
  const [time, pay] = input[day];
  return time - passDay === 1 ? dp[day - 1] + pay : dp[day - 1];
}

const dp = [0];
for (let i = 1; i < input.length; i++) {
  const incomes = [];
  for (let j = 0; j < 5; j++) {
    incomes.push(calIncome(i - j, j));
  }
  dp[i] = Math.max(...incomes);
}

console.log(dp[dp.length - 1]);
