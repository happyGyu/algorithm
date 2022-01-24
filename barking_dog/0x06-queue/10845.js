const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

class Queue {
    constructor() {
        this.q = [];
        this.front = 0;
        this.rear = -1;
    }

    push(number) {
        this.q.push(number);
        this.rear++;
    }

    pop() {
        const num = this.q[this.front];
        if (num) {
            this.q[this.front] = undefined;
            this.front++;
            return num;
        }
        return -1;
    }

    getSize() {
        const size = this.rear - this.front + 1;
        return (size > 0)? size : 0;
    }

    isEmpty() {
        const size = this.getSize();
        return (size > 0)? 0 : 1;
    }

    getFront() {
        return this.q[this.front] ?? -1;
    }

    getBack() {
        return this.q[this.rear] ?? -1;
    }
}

const queue = new Queue;
let answer = '';
for (let i = 1; i < input.length; i++) {
    let result;
    const command = input[i].split(' ');
    switch (command[0]) {
        case 'push':
            queue.push(Number(command[1]));
            break;
        case 'pop':
            result = queue.pop();
            break;
        case 'size':
            result = queue.getSize();
            break;
        case 'empty':
            result = queue.isEmpty();
            break;
        case 'front':
            result = queue.getFront();
            break;
        case 'back':
            result = queue.getBack();
    }
    if (result !== undefined) answer += `${result}\n`;
}
console.log(answer);
