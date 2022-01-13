const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

const string = input[0].split('');
let head = null;
let pointer = null;

if (string.length !== 0) {
    head = new Node(string[0]);
    pointer = head;
    for (let i = 1; i < string.length; i++) {
        const node = new Node(string[i]);
        pointer.next = node;
        node.prev = pointer;
        pointer = node;
    }
}


const count = Number(input[1]);
for (let i = 0; i < count; i++) {
    const command = input[i + 2].split(' ');
    switch (command[0]) {
        case 'L':
            pointer = pointer? pointer.prev : null;
            break;
        case 'D':
            if (pointer) {
                pointer = pointer.next ?? pointer; 
            } else {
                pointer = head;
            }
            break;
        case 'B':
            if (pointer) {
                if (pointer.prev) {
                    pointer.prev.next = pointer.next;
                    if (pointer.next) pointer.next.prev = pointer.prev;
                    pointer = pointer.prev;
                } else {
                    head = pointer.next;
                    pointer = null;
                    if (head) head.prev = null;
                }
            }
            break;
        case 'P':
            const node = new Node(command[1]);
            if (pointer) {
                if (pointer.next) {
                    node.next = pointer.next;
                    pointer.next.prev = node;  
                }
                pointer.next = node; 
                node.prev = pointer;
            } else {
                node.next = head;
                if (head) head.prev = node;
                head = node;
            }
            pointer = node;
            break;
    }
}

let answer = '';
while (head) {
    answer += head.val;
    head = head.next;
}
console.log(answer);