//const n = Number(require('fs').readFileSync('/dev/stdin').toString());
const n = 9;
const dp = [0, 1, 2];
for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}
console.log(dp[n]);

//10007의 나머지를 출력해야한다는 점을 고려하자! 왜그럴까? 
//마지막에만 10007을 나눠주면 안되는 이유는? --> 값이 너무 커서 int오버플로우 발생