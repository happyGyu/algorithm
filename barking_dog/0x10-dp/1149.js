const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
const number = input[0];
const priceArr = input.splice(1).map(line => line.split(' ').map(n => Number(n)));

const dp = [priceArr[0]];
for (let i = 1; i < number; i++) {
    dp[i] = [];
    currPrice = priceArr[i];
    dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + currPrice[0];
    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + currPrice[1];
    dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + currPrice[2];
}
console.log(Math.min(...dp[number - 1]));