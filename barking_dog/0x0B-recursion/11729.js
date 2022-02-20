//const num = Number(require('fs').readFileSync('/dev/stdin').toString());
const num = 3;

let answer = [];
function solution(a,b,n) {
    if (n === 1) {
        answer.push(`${a} ${b}`);
        return;
    }
    solution(a, 6 - a - b, n - 1);
    answer.push(`${a} ${b}`);
    solution(6 - a - b, b, n - 1);
}

solution(1,3,num);
const final = answer.join('\n');
console.log(answer.length);
console.log(final);