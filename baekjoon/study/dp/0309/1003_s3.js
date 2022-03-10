const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(n => Number(n));
const dp = [[1,0], [0,1]]
for (let i = 2; i <= 40; i++) {
    dp[i] = [dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]];
}
let answer = '';
for (let testCase of input.slice(1)) {
    answer += `${dp[testCase][0]} ${dp[testCase][1]}\n`;
}
console.log(answer)