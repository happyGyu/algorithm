const [a, b]= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => parseInt(n));

console.log(`${a+b}
${a-b}
${a*b}
${parseInt(a/b)}
${a%b}`)