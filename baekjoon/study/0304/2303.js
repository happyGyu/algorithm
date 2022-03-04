const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n')
const players = input.slice(1).map(line => line.trim().split(' ').map(n => Number(n)));

let best = 0;
let bestPlayer = 0;
let cnt = 0;
for (let player of players) {
    cnt++
    const sum = player.reduce((acc,n) => acc + n);
    for (let c1 = 0; c1 < 5; c1++) {
        for (let c2 = c1 + 1; c2 < 5; c2++) {
            const curr = (sum - player[c1] - player[c2]) % 10;
            if (curr >= best) {
                best = curr;
                bestPlayer = cnt; 
            }
        }
    }
}
console.log(bestPlayer);