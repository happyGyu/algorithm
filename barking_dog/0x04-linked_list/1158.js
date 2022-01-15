const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => parseInt(n));
const arr = new Array(n).fill(0).map((n,i) => i + 1);
const answer = [];
let pointer = -1;
while (answer.length !== n) {
    let cnt = 0;
    while (cnt !== k) {
        pointer++;
        if (arr[pointer % n] !== 0) cnt++;
    }
    answer.push(arr[pointer % n ]);
    arr[pointer % n] = 0;
}

console.log(`<${answer.join(', ')}>`)