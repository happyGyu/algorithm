const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => parseInt(n));
const result = input.sort(function (a,b) {
    return a-b;
}) 
console.log(result.join(' '))