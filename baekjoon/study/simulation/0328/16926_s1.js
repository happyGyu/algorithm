const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(line => line.trim().split(' ').map(n => Number(n)));
const [colLength, rowLength, totalRotateCnt] = input[0];
const array = input.slice(1);
const stepCnt = colLength < rowLength ? colLength / 2 : rowLength / 2;

for (let i = 0; i < stepCnt; i++) {
    const rotateCnt = totalRotateCnt % (2 * colLength + 2 * rowLength - 4 - 8 * i); 
    for (let j = 0; j < rotateCnt; j++) {
        const upRow = getRow(i, i + 1, rowLength - 1 - i);
        const downRow = getRow(colLength - 1 - i, i, rowLength - 1 - i - 1);
        const leftCol = getCol(i, i, colLength - 1 - i - 1);
        const rigthCol = getCol(rowLength - 1 - i, i + 1, colLength - 1 - i);
        moveRow(upRow, i, i);
        moveRow(downRow, colLength - 1 - i, i + 1);
        moveCol(leftCol, i, i + 1);
        moveCol(rigthCol, rowLength - 1 - i, i);
    }
}
console.log(array.map(line => line.join(' ')).join('\n'));

function getRow(row, colStart, colEnd) {
    return array[row].slice(colStart, colEnd + 1);
}

function getCol(col, rowStart, rowEnd) {
    const parsedCol = [];
    for (let i = rowStart; i <= rowEnd; i++) {
        parsedCol.push(array[i][col]);
    }
    return parsedCol;
}

function moveRow(newRow, row, colStart) {
    for (let i = 0; i < newRow.length; i++) {
        array[row][colStart + i] = newRow[i];
    }
}

function moveCol(newCol, col, rowStart) {
    for (let i = 0; i < newCol.length; i++) {
        array[rowStart + i][col] = newCol[i];
    }
}