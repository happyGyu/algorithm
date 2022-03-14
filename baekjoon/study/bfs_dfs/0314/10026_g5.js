const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const paint = input.slice(1).map((line) =>
  line
    .trim()
    .split("")
    .map((color) => {
      return { color: color, visted: false };
    })
);
const blindPaint = paint.map((line) =>
  line.map((px) => {
    return { color: px.color === "G" ? "R" : px.color, visted: false };
  })
);
const colLength = paint.length;
const rowLength = paint[0].length;
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const normalCnt = {
  R: 0,
  G: 0,
  B: 0,
};

const blindCnt = {
  R: 0,
  B: 0,
};

function countArea(inputPaint) {
  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      if (!inputPaint[i][j].visted) {
        calArea(inputPaint[i][j].color, [i, j], inputPaint);
      }
    }
  }
}

function calArea(color, startIdx, inputPaint) {
  const stack = [startIdx];
  while (stack.length !== 0) {
    const currIdx = stack.pop();
    inputPaint[currIdx[0]][currIdx[1]].visted = true;
    for (let i = 0; i < 4; i++) {
      const tempCol = currIdx[0] + dx[i];
      const tempRow = currIdx[1] + dy[i];
      if (tempCol < 0 || tempCol >= colLength || tempRow < 0 || tempRow >= rowLength) continue;
      const tempPos = inputPaint[tempCol][tempRow];
      if (tempPos.color === color && !tempPos.visted) {
        stack.push([tempCol, tempRow]);
      }
    }
  }
  if (inputPaint === paint) normalCnt[color]++;
  else blindCnt[color]++;
}

function sumCnt(obj) {
  return Object.values(obj).reduce((acc, n) => acc + n);
}

countArea(paint);
countArea(blindPaint);
console.log(sumCnt(normalCnt) + " " + sumCnt(blindCnt));
