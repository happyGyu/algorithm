const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(line => line.split(' ').map(n => Number(n)));
const N = Number(input[0]);

const dp = new Array(N + 5).fill(0);
for (let i = 1; i <= N; i++) {
    const [time, pay] = input[i];
    dp[i + time - 1] = Math.max(dp[i + time - 1], dp[i - 1] + pay);
}
console.log(dp)