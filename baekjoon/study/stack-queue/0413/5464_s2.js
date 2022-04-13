const input = require("fs").readFileSync("./test.txt").toString().trim().split("\n");
const [spaceCnt, carCnt] = input[0]
  .trim()
  .split(" ")
  .map((n) => Number(n));
const spacePrice = [];
const carPrice = [];
const inAndOutInfo = [];
for (let i = 1; i <= spaceCnt; i++) {
  spacePrice.push(Number(input[i]));
}
for (let i = spaceCnt + 1; i <= spaceCnt + carCnt; i++) {
  carPrice.push(Number(input[i]));
}
for (let i = spaceCnt + carCnt + 1; i < input.length; i++) {
  inAndOutInfo.push(Number(input[i]));
}

const emptySpace = new Array(spaceCnt).fill().map((n, i) => spaceCnt - 1 - i);
const parkingState = [];
const waitingCars = [];
let income = 0;
for (const carNum of inAndOutInfo) {
  if (carNum > 0) {
    if (emptySpace.length) {
      const spaceIdx = emptySpace.pop();
      parkingState[carNum] = spaceIdx;
      income += carPrice[carNum - 1] * spacePrice[spaceIdx];
    } else {
      waitingCars.push(carNum);
    }
  } else {
    const parkedSpaceIdx = parkingState[-carNum];
    if (waitingCars.length) {
      const currCarNum = waitingCars.shift();
      parkingState[currCarNum] = parkedSpaceIdx;
      income += carPrice[currCarNum - 1] * spacePrice[parkedSpaceIdx];
    } else {
      emptySpace.push(parkedSpaceIdx);
      emptySpace.sort((a, b) => b - a);
    }
  }
}
console.log(income);
