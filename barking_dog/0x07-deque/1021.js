const input = require('fs').readFileSync('./1021.txt').toString().trim().split('\n');
const arrayLen = Number(input[0].split(' ')[0]);
const numArr = new Array(arrayLen).fill().map((n,i) => i + 1);
const popList = input[1].split(' ').map(n => Number(n));

let answer = 0;
let pointer = 0;
for (let target of popList) {
    if (numArr[pointer] === numArr) numArr.shift();
    else {
        const targetIdx = numArr.indexOf(target);
        const distance = Math.abs(targetIdx - pointer);
        answer += (distance > numArr.length / 2) ? numArr.length - distance : distance;
        pointer = targetIdx;
        numArr.splice(pointer,1);
    }
}
console.log(answer);