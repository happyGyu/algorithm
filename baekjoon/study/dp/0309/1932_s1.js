const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(line => line.split(' ').map(n => Number(n)));
const dp = [[0], input[1]];

for (let i = 2; i < input.length; i++) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][0] + input[i][0];
    for (let j = 1; j < input[i].length - 1; j++) {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + input[i][j];
    }
    dp[i].push(input[i][input[i].length - 1] + dp[i - 1][dp[i - 1].length - 1]);
}
console.log(Math.max(...dp[dp.length - 1]));