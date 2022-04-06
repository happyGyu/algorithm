const group = require('fs').readFileSync('./test.txt').toString().trim().split('-');
const parsedGroup = group.map(e => e.trim().split('+').map(n => Number(n)));
const summedGroup = parsedGroup.map(group => group.reduce((acc, n) => acc + n));
let answer = summedGroup.reduce((acc, n) => acc - n);
console.log(answer);

