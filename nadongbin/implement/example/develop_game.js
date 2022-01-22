const input = require('fs').readFileSync('./develop_game_input.txt').toString().trim().split('\n');
const [maxRow, maxCol] = input[0].split(' ').map(n => parseInt(n));
const position = input[1].split(' ').map(n => parseInt(n));
let direction = position[2];
const map = input.splice(2).map(row => row.split(' ').map(n => parseInt(n)));
const move = [[-1, 0], [0, 1], [1, 0], [0, -1]];

map[position[0]][position[1]] = 2;
let answer = 1;
while (true) {
    let moved = false;
    for (let i = 0; i < 4; i++) {
        direction = direction === 0? 3 : direction - 1;
        const tempRow = position[0] + move[direction][0];
        const tempCol = position[1] + move[direction][1];
        if (map[tempRow][tempCol] === 0) {
            map[tempRow][tempCol] = 2;
            position[0] = tempRow;
            position[1] = tempCol;
            answer++;
            moved = true;
            break;
        }
    }
    if (!moved) {
        const tempRow = position[0] + move[(direction + 2) % 4][0];
        const tempCol = position[1] + move[(direction + 2) % 4][1];
        if (map[tempRow][tempCol] === 2) {
            position[0] = tempRow;
            position[1] = tempCol;
        } else {
            console.log(answer);
            return;
        }
    }
}
