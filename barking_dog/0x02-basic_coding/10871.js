const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [n, x] = input[0].split(' ').map(e => parseInt(e));
const numbers = input[1].split(' ').map(num => parseInt(num));

const answer = numbers.filter(n => n < x);
console.log(answer.join(' '))