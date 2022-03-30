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
const [truckNum, length, maxWeight] = input[0];
const trucks = input[1];
let bridge = new Array(length).fill(0);
let moved = 0;
let onBridgeWeight = 0;
let time = 0;

while (moved !== truckNum) {
    time++;
    const updatedBridge = bridge.slice(1);
    const finished = bridge[0];
    onBridgeWeight -= finished;
    if (trucks[0] + onBridgeWeight <= maxWeight) {
        onBridgeWeight += trucks[0];
        updatedBridge.push(trucks.shift());
    } else {
        updatedBridge.push(0);
    }
    if (finished > 0) moved++;
    bridge = updatedBridge;
}
console.log(time);
