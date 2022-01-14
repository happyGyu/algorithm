const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

const count = Number(input[0]);
for (let i = 1; i <= count; i++) {
    const string = input[i].split('');
    let head = null;
    let pointer = null;
    string.forEach( c => {
        switch (c) {
            case '<':
                pointer = pointer? pointer.prev : null;
                break;
            case '>':
                if (pointer) {
                    pointer = pointer.next ?? pointer; 
                } else {
                    pointer = head;
                }
                break;
            case '-':
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
            default:
                const node = new Node(c);
                if (pointer) {
                    if (pointer.next) {
                        pointer.next.prev = node;
                        node.next= pointer.next;
                        node.prev = pointer;
                        pointer.next = node;
                    } else {
                        pointer.next = node;
                        node.prev = pointer;
                    }
                } else {
                    node.next = head;
                    if (head) head.prev = node;
                    head = node;
                }
                pointer = node;
        }
    });
    let answer = '';
    while (head) {
        answer += head.val;
        head = head.next;
    }
    console.log(answer);
}