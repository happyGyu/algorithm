const num = Number(require('fs').readFileSync('/dev/stdin').toString());
const dp = new Array(num + 1);
dp[1] = 0;
for (let i = 2; i <= num; i++) {
    const temp = [];
    if (i % 2 === 0) temp.push(dp[i/2] + 1);
    if (i % 3 === 0) temp.push(dp[i/3] + 1);
    temp.push(dp[i - 1] + 1);
    dp[i] = Math.min(...temp);
}
console.log(dp[num]);