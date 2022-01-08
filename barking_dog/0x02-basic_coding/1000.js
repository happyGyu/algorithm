const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(n => parseInt(n));
const [a,b] = input

console.log(a + b)