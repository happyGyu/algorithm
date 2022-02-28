const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(n => Number(n));

for (let i = 0; i < input[0]; i++) {
    const floor = input[i * 2 + 1];
    const room = input[i * 2 + 2];
    cal(floor, room)
}

function cal(floor, room) {
    let prevFloor = new Array(room).fill().map((n,i) => i + 1);
    let currFloor = [];
    for (let i = 1; i <= floor; i++) {
        prevFloor.reduce((acc, n) => {
            const currRoom = acc + n;
            currFloor.push(currRoom);
            return currRoom;
        },0)
        prevFloor = currFloor.slice(0);
        currFloor = new Array();
        console.log(prevFloor)
    }
    console.log(prevFloor[prevFloor.length - 1]);
}