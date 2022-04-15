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

// const test = [1, 6, 2, 9, 10, 2, 3, 5, 6, 8, 19, 2, 4];
// const heap = [0];
// for (let i = 1; i < test.length; i++) {
//   heap.push(test[i]);
//   organizeFromTheBottom(i);
//   console.log(heap);
// }

function organizeFromTheBottom(i) {
  if (heap[i] < heap[parseInt(i / 2)]) {
    const smaller = heap[i];
    heap[i] = heap[parseInt(i / 2)];
    heap[parseInt(i / 2)] = smaller;
    organizeFromTheBottom(i);
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
  const [smaller, idx] = heap[2 * i] <= heap[2 * i + 1] ? [heap[2 * i], 2 * i] : [heap[2 * i + 1], 2 * i + 1];
  if (heap[i] > smaller) {
    heap[idx] = heap[i];
    heap[i] = smaller;
    organizeFromTheTop(idx);
  }
}
