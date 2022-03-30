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
const [height, width, r, c, k] = input[0];
const rollingPlan = input.pop();
const map = input.slice(1);
const dice = {
    center: 0,
    row: [3, 0, 1],
    col: [2, 0, 4],
    top: 5,
};
const diceValue = [0, 0, 0, 0, 0, 0];
let currRow = r;
let currCol = c;
let answer = "";

function move(dirNum) {
    switch (dirNum) {
        case 1:
            moveEast();
            break;
        case 2:
            moveWest();
            break;
        case 3:
            moveNorth();
            break;
        case 4:
            moveSouth();
    }
}

function moveEast() {
    const [newRow, newCol] = [currRow, currCol + 1];
    if (isVaildPos(newRow, newCol)) {
        dice.row.push(dice.top);
        dice.top = dice.row.shift();
        dice.center = dice.row[1];
        dice.col[1] = dice.center;
        updateValue(newRow, newCol);
    }
}

function moveWest() {
    const [newRow, newCol] = [currRow, currCol - 1];
    if (isVaildPos(newRow, newCol)) {
        dice.row.unshift(dice.top);
        dice.top = dice.row.pop();
        dice.center = dice.row[1];
        dice.col[1] = dice.center;
        updateValue(newRow, newCol);
    }
}

function moveNorth() {
    const [newRow, newCol] = [currRow - 1, currCol];
    if (isVaildPos(newRow, newCol)) {
        dice.col.unshift(dice.top);
        dice.top = dice.col.pop();
        dice.center = dice.col[1];
        dice.row[1] = dice.center;
        updateValue(newRow, newCol);
    }
}

function moveSouth() {
    const [newRow, newCol] = [currRow + 1, currCol];
    if (isVaildPos(newRow, newCol)) {
        dice.col.push(dice.top);
        dice.top = dice.col.shift();
        dice.center = dice.col[1];
        dice.row[1] = dice.center;
        updateValue(newRow, newCol);
    }
}

function isVaildPos(row, col) {
    return row < height && row >= 0 && col < width && col >= 0;
}

function updateValue(newRow, newCol) {
    if (map[newRow][newCol] === 0) {
        map[newRow][newCol] = diceValue[dice.center];
    } else {
        diceValue[dice.center] = map[newRow][newCol];
        map[newRow][newCol] = 0;
    }
    answer += `${diceValue[dice.top]}\n`;
    currRow = newRow;
    currCol = newCol;
}

for (const dir of rollingPlan) {
    move(dir);
}
console.log(answer);
