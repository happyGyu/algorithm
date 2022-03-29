const input = require("fs")
    .readFileSync("./test.txt")
    .toString()
    .trim()
    .split("\n")
    .map((n) => Number(n));
const testCases = input.slice(1);
const dp = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
for (let i = 11; i <= 100; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
}
const answers = testCases.map((n) => dp[n]);
console.log(answers.join("\n"));
