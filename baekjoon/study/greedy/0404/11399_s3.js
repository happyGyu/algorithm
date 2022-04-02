const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
const times = input[1].trim().split(' ').map(n => Number(n)).sort((a, b)=> a - b);
let answer = 0;
times.reduce((acc, n) => {
    answer += acc + n;
    return acc + n;
},0)
console.log(answer);
