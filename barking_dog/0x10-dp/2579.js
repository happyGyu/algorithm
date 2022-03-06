const scores = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(n => Number(n));
const stairNum = scores[0];

const dp = [];
dp[0] = [undefined, 0, 0];
dp[1] = [undefined, scores[1], 0];
for (let i= 2; i <= stairNum; i++) {
    dp[i] = [];
    dp[i][1] = Math.max(dp[i - 2][1], dp[i - 2][2]) + scores[i];
    dp[i][2] = dp[i - 1][1] + scores[i];
}
console.log(Math.max(dp[stairNum][1],dp[stairNum][2]));

//2차원 배열말고 다른 방식으로 하면 1차원 배열로도 풀수 있대! 뭘까?