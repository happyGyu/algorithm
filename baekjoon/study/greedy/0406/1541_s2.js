const group = require('fs').readFileSync('./test.txt').toString().trim().split('-');
const parsedGroup = group.map(e => e.trim().split('+').map(n => Number(n)));
const summedGroup = parsedGroup.map(group => group.reduce((acc, n) => acc + n));
let answer = summedGroup[0];
for (let i = 1; i < summedGroup.length; i++) {
    answer -= summedGroup[i];
}
console.log(answer);

