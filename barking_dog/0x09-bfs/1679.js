const [start, target] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => Number(n));
if (start === target) {
    console.log(0);
    return;
}
const queue = [];
queue.push(start);
const time = [];
time[start] = 0;
let answer;

let pointer = 0;
while (true) {
    const curr = queue[pointer];
    pointer++;
    for (let newPos of [curr + 1, curr - 1, curr * 2]) {
        if (newPos < 0 || newPos > 100000) continue;
        if (time[newPos] === undefined) {
            time[newPos] = time[curr] + 1;
            if (newPos === target) {
                console.log(time[newPos]);
                return;
            }
            queue.push(newPos);
        }
    }
}