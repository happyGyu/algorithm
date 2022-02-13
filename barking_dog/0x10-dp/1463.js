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

//bfs풀이
const queue = [1];
const log = [];
log[1] = 0;

while (true) {
    const curr = queue.shift();
    const temp = [curr * 2, curr * 3, curr + 1];
    if (temp.indexOf(num) !== -1) {
        console.log(log[curr] + 1);
        return;
    }
    if (curr * 2 < num && log[curr * 2] === undefined) {
        log[curr * 2] = log[curr] + 1;
        queue.push(curr * 2);
    } 
    if (curr * 3 < num && log[curr * 3] === undefined) {
        log[curr * 3] = log[curr] + 1;
        queue.push(curr * 3);
    } 
    if (curr + 1 < num && log[curr + 1] === undefined) {
        log[curr + 1] = log[curr] + 1;
        queue.push(curr + 1);
    } 
}