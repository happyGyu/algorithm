const input = '(()['
const stack = [];
let flag = false;
let answer = 0;
for (let i = 0; i < input.length; i++) {
    const curr = input[i];
    if (curr === '(' || curr === '[') {
        stack.push(curr);
        flag = true;
    } else {
        const latest = stack[stack.length - 1];
        if ((curr === ')' && latest !== '(') || (curr === ']' && latest !== '[')) {
            answer = 0;
            break;
        }
        if (flag) {
            let temp = 1;
            stack.forEach(e => {
                if (e === '(') temp *= 2;
                else if (e === '[') temp *= 3;
            })
            answer += temp;
            stack.pop();
            flag = false;
        } else {
            stack.pop();
        }
    }
}
if (stack.length !== 0) answer = 0;
console.log(answer);