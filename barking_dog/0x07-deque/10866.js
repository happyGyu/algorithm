const input = require('fs').readFileSync('./10886.txt').toString().trim().split('\n');
let txt = '';
const deque = [];
let head = 10000;
let tail = 10000;

for (let i = 1; i < input.length; i++) {
    const command = input[i].split(' ');
    switch (command[0]) {
        case 'push_front':
            head--;
            deque[head] = Number(command[1]);
            break;
        case 'push_back':
            deque[tail] = Number(command[1]);
            tail++;
            break;
        case 'pop_front':
            if (deque[head] === undefined) {
                txt += `${-1}\n`;
                break;
            }
            txt += `${deque[head]}\n`;
            deque[head] = undefined;
            head++;
            break;
        case 'pop_back':
            if (deque[tail - 1] === undefined) {
                txt += `${-1}\n`;
                break;
            }
            tail--;
            txt += `${deque[tail]}\n`;
            deque[tail] = undefined;
            break;
        case 'size':
            txt += `${tail - head}\n`;
            break;
        case 'empty':
            txt += (tail > head)? `${0}\n`:`${1}\n`;
            break;
        case 'front':
            if (deque[head] === undefined) {
                txt += `${-1}\n`;
                break;
            }
            txt += `${deque[head]}\n`;
            break;
        case 'back':
            if (deque[tail - 1] === undefined) {
                txt += `${-1}\n`;
                break;
            }
            txt += `${deque[tail - 1]}\n`;
    }
}
console.log(txt);