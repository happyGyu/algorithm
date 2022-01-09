const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(n => Number(n));
let max = input[0];
let index = 0;
for (let i = 1; i < input.length; i++) {
    if (input[i] > max) {
        max = input[i];
        index = i;
    }
}
console.log(`${max}\n${index + 1}`);