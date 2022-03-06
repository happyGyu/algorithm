const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
const numArr = input[1].trim().split(' ');
const sumArr = [0];
let acc = 0;
for (let num of numArr) {
    acc += Number(num);
    sumArr.push(acc);
}

const len = input.length;
let answer = ''
for (let i = 2; i < len; i++) {
    const [start, end] = input[i].split(' ');
    answer += `${sumArr[+end] - sumArr[+start - 1]}\n`
}
console.log(answer);

//반복문 안에서 각 계산마다 출력을 해주면 시간초과가 남!
//여러번 출력을 해야할 때는 문자열을 만들어서 한번에 출력하자