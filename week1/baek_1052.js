const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n));
let [n, k] = input;

let currPowerOfTwo;
for (let i = 0; i < k; i++) {
    currPowerOfTwo = findMaximumPowerOfTwo(n);
    if (n === currPowerOfTwo) break;
    n -= currPowerOfTwo;
}
console.log(currPowerOfTwo - n) 

function findMaximumPowerOfTwo(n) {
    let powerOfTwo = 1;
    while (n >= powerOfTwo * 2) {
        powerOfTwo *=2
    }
    return powerOfTwo
}