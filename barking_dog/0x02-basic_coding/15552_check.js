// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// for (let i = 1; i < input.length; i++) {
//     const [a, b] = input[i].trim().split(' ').map(n => parseInt(n));
//     console.log(a + b)
// }

// 위 코드는 시간초과 판정을 받음

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].trim().split(' ');
    result.push(Number(a) + Number(b));
}
console.log(result.join('\n'));

// 위 코드는 간신히 통과 (1044ms) Number 대신 parseInt로 했을땐 조금 더 느렸음(한번만 수행한거라 정확한건 알아봐야 할듯)

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];
for (let i = 1; i < input.length; i++) {
    const [a, b] = input[i].trim().split(' ').map(n => parseInt(n));
    result.push(a+b);
}
console.log(result.join('\n'));

// 위 코드는 map으로 문자를 바꿔줬는데 더 느려짐. (1440ms) 