const input = require('fs').readFileSync('./udlr_input.txt').toString().trim().split('\n');
const max = Number(input[0]);
const commands = input[1].split(' ');

let x = 1;
let y = 1;

for (let i = 0; i < commands.length; i++) {
    switch(commands[i]) {
        case 'U':
            y = 1? 1 : y - 1;
            break;
        case 'D':
            y = (y === max)? max : y + 1;
            break;
        case 'R':
            x =  (x === max)? max : x + 1;
            break;
        case 'L':
            x = 1? 1 : x - 1;
    }
}
console.log(`${y} ${x}`);