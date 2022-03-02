//마인크래프트

const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(line => line.trim().split(' ').map(n => Number(n)));
const [row, col, stock] = input[0];

//열의 구분이 의미가 없기 떄문에 전부 펼침
const mapInfo = [];
input.slice(1).forEach(arr => mapInfo.push(...arr));

const maxFloor = Math.max(...mapInfo);
const minFloor = Math.min(...mapInfo);
let targetFloor = maxFloor;

let answerTime = 99999999;
let answerFloor = -1;

//높은 층부터 한칸씩 내려가며 가능한 모든 경우의 수 탐색
while (targetFloor >= minFloor) {
    let under = 0;
    let over = 0;
    for (const floor of mapInfo) {
        if ((floor - targetFloor) < 0) under += (targetFloor - floor);
        else over += (floor - targetFloor);
    }

    // mapInfo.forEach((n) => {
    //     if ((n - targetFloor) < 0) {
    //         under -= (n - targetFloor);
    //     } else if ((n - targetFloor) > 0) {
    //         over += (n - targetFloor)
    //     } 
    // });

    if ((stock + over) >= under) {
        const currTime = under + (over * 2);
        if (answerTime > currTime) {
            answerTime = currTime;
            answerFloor = targetFloor;
        }
    }
    targetFloor--;
}
console.log(answerTime, answerFloor);

