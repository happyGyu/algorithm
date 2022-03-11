const input = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = [];
dp[1] = [0,1,1,1,1,1,1,1,1,1];
for (let i = 2; i <= input; i++) {
    dp[i] = [];
    dp[i][0] = dp[i - 1][1];
    dp[i][9] = dp[i - 1][8];
    for (let j = 1; j <= 8; j++) {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
}
console.log(dp[input].reduce((acc, n) => acc + n) % 1000000000)