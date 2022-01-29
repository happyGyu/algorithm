const input = require('fs').readFileSync('./sample.txt').toString().trim().split('\n');
const [totalCnt, questionCnt] = input[0].split(' ').map(n => parseInt(n));

const nameDic = {};
const orderDic = {};
let answer = '';

for (let i = 1; i <= totalCnt; i++) {
    nameDic[i] = input[i];
    orderDic[input[i]] = i;
}

for (let i = totalCnt + 1; i < input.length; i++) {    
    if (Number.isInteger(+input[i])) answer += `${nameDic[+input[i]]}\n`;
    else answer += `${orderDic[input[i]]}\n`;
}
console.log(answer);