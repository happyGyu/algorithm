const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(line => line.trim().split(' ').map(n => Number(n)));
const coins = [];
const targets = [];
for (let i = 1; i <= input[0]; i++) {
    coins.push(input[3 * i - 1]);
    targets.push(input[3 * i][0])
}

for (let i = 0; i < input[0]; i++) {
    const coinArr = coins[i];
    const target = targets[i];
    const log = new Array(target + 1).fill(0);
    const queue = coinArr.slice();
    while (queue.length !== 0) {
        const curr = queue.pop();
        log[curr]++;
        for (let coin of coinArr) {
            if (coin + curr <= target) {
                queue.push(coin + curr);
            }
        }
    }
    console.log(log[target]);
}
