const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
const [k, targetNum] = input[0].trim().split(' ').map(n => Number(n));
const storage = input.slice(1).map(n => Number(n));
const maxLength = Math.floor(storage.reduce((acc, n) => acc + n) / targetNum);

let end = maxLength;
let start = 0;

while (start < end) {
    const mid = Math.ceil((start + end) / 2);
    if (test(mid)) {
        start = mid;
    } else {
        end = mid - 1;
    }
}
console.log(start);

function test(length) {
    const num = storage.reduce((acc, line) => {return acc + Math.floor(line / length)}, 0)
    return targetNum <= num;
}

