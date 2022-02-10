//const num = Number(require('fs').readFileSync('/dev/stdin').toString());
const num = 4;

let answer = '';
function solution(a,b,n) {
    if (n === 1) {
        answer += `${a} ${b}\n`;
        return;
    }
    solution(a, 6 - a - b, n - 1);
    answer += `${a} ${b}\n`;
    solution(6 - a - b, b, n - 1);
}

solution(1,3,num);
console.log(answer);