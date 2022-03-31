const input = require("fs")
    .readFileSync("./test.txt")
    .toString()
    .trim()
    .split("\n")
    .map((line) =>
        line
            .trim()
            .split(" ")
            .map((n) => Number(n))
    );
const [height, width] = input[0];
const [row, col, dir] = input[1];
const map = input.slice(2);

const cleaned = Array.from({ length: height }, () => Array.from({ length: width }, () => false));
const currPos = { row, col, dir };
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
let answer = 0;
cleaned[currPos.row][currPos.col] = true;
answer++;

function move(row, col, dir) {
    const tempR = row + dr[dir];
    const tempC = col + dc[dir];
    if (!cleaned[tempR][tempC] && map[tempR][tempC] === 0) {
        cleaned[tempR][tempC] = true;
        answer++;
        currPos.row = tempR;
        currPos.col = tempC;
        return true;
    }
    return false;
}

function backStep(row, col) {
    const tempDir = (currPos.dir + 4 - 2) % 4;
    const tempR = row + dr[tempDir];
    const tempC = col + dc[tempDir];
    if (map[tempR][tempC] === 0) {
        currPos.row = tempR;
        currPos.col = tempC;
        return true;
    }
    return false;
}

let finished = false;
let moved = false;
while (!finished) {
    moved = false;
    for (let i = 0; i < 4; i++) {
        currPos.dir = (currPos.dir + 4 - 1) % 4;
        if (move(currPos.row, currPos.col, currPos.dir)) {
            moved = true;
            break;
        }
    }
    if (!moved) {
        if (!backStep(currPos.row, currPos.col)) {
            finished = true;
        }
    }
}
console.log(answer);
