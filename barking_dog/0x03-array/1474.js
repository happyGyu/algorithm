const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(n=>parseInt(n));
const count = new Array(10).fill(0);
input.forEach(n=>count[n]++);
const sixNine = parseInt((count[6] + count[9] + 1) / 2);
const answer = Math.max(...count.slice(0,6), ...count.slice(7,9), sixNine);
console.log(answer);