const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

const heap = [];
for (let i = 1; i < input.length; i++) {
  heap.push(input[i]);
  organizeHeap(i);
  console.log(heap);
  console.log(heap[1]);
}

function organizeHeap(i) {
  if (heap[i] >= heap[parseInt(i / 2)]) return;
  else {
    const son = heap[parseInt(i / 2)];
    const father = heap[i];
    heap[parseInt(i / 2)] = father;
    heap[i] = son;
    return organizeHeap(parseInt(i / 2));
  }
}
