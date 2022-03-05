const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => Number(n));
const testCase = input.slice(1);

const dp = [];
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for ( let i = 4; i < 11; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let num of testCase) {
    console.log(dp[num])
}