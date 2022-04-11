const lengthInfo = require('fs').readFileSync('./test.txt').toString().split('\n')[1].trim().split(' ').map(n => Number(n));

let answer = '';
const stack = [];
for (let i = 0; i < lengthInfo.length; i++) {
    while (stack.length !== 0) {
        const curr = stack.pop();
        if (curr.length > lengthInfo[i]) {
            answer += `${curr.index + 1} `;
            stack.push(curr);
            stack.push({length: lengthInfo[i], index: i});
            break;
        } 
    }
    if (stack.length === 0) {
        stack.push({length: lengthInfo[i], index: i});
        answer += '0 ';
    }
}
console.log(answer);