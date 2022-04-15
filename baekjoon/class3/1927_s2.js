const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

const heap = [0];
answer = "";
for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    const smallest = getSmallest(heap);
    answer += `${smallest}\n`;
  } else {
    heap.push(input[i]);
    organizeFromTheBottom(heap.length - 1);
  }
  console.log(heap);
}
console.log(answer);

function organizeFromTheBottom(i) {
  if (heap[i] < heap[parseInt(i / 2)]) {
    const smaller = heap[i];
    heap[i] = heap[parseInt(i / 2)];
    heap[parseInt(i / 2)] = smaller;
    organizeFromTheBottom(parseInt(i / 2));
  }
}

function getSmallest(heap) {
  const smallest = heap[1] ?? 0;
  heap[1] = heap[heap.length - 1];
  heap.pop();
  organizeFromTheTop(1);
  return smallest;
}

function organizeFromTheTop(i) {
  if (!heap[2 * i]) return;
  let smaller;
  let idx;
  if (!heap[2 * i + 1]) {
    [smaller, idx] = [heap[2 * i], 2 * i];
  } else {
    [smaller, idx] = heap[2 * i] <= heap[2 * i + 1] ? [heap[2 * i], 2 * i] : [heap[2 * i + 1], 2 * i + 1];
  }
  if (heap[i] > smaller) {
    heap[idx] = heap[i];
    heap[i] = smaller;
    organizeFromTheTop(idx);
  }
}

