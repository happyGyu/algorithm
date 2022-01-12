const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n=>parseInt(n));
const result = String(a*b*c).split('');
const answer = new Array(10).fill(0);
result.forEach(n => answer[parseInt(n)]++);
console.log(answer.join('\n'));