function solution(bridge_length, weight, truck_weights) {
  let timer = 0;
  let totalWeight = 0;
  let pointer = 0;
  const bridge = new Array(bridge_length).fill(0);
  while (pointer < truck_weights.length) {
    timer++;
    const currOut = bridge.shift();
    if (currOut !== 0) {
      totalWeight -= currOut;
    }

    if (totalWeight + truck_weights[pointer] <= weight) {
      bridge.push(truck_weights[pointer]);
      totalWeight += truck_weights[pointer];
      pointer++;
    } else {
      bridge.push(0);
    }
  }
  return timer + bridge_length;
}
