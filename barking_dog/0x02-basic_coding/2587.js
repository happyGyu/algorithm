const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => parseInt(n));
const sum = input.reduce((acc, num) => acc + num);
const middle = input.sort((a,b) => a-b)[2];

console.log(sum / 5);
console.log(middle);