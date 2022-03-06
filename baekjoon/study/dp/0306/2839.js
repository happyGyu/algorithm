const N = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = [-1, -1, -1, 1, -1, 1];
for (let i = 6; i <= N; i++) {
    if (dp[i - 3] === -1 && dp[i - 5] === -1) {
        dp[i] = -1;
    } else if (dp[i - 3] !== -1 && dp[i - 5] !== -1) {
        dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1;
    } else {
        dp[i] = Math.max(dp[i - 3], dp[i - 5]) + 1;
    }
}
console.log(dp[N])