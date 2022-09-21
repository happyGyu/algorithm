//1715
const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => +n);

//최소힙
class Heap {
  constructor() {
    this.storage = [null];
  }

  push(el) {
    this.storage.push(el);
    let currentIdx = this.storage.length - 1;
    while (currentIdx !== 1) {
      const parentElIdx = Math.floor(currentIdx / 2);
      if (this.isValid(currentIdx, parentElIdx)) return;
      this.storage[currentIdx] = this.storage[parentElIdx];
      this.storage[parentElIdx] = el;
      currentIdx = parentElIdx;
    }
  }

  top() {
    return this.storage[1];
  }

  pop() {
    if (this.storage.length === 2) return this.storage.pop();
    const top = this.top();
    const lastEl = this.storage.pop();
    this.storage[1] = lastEl;
    let currentIdx = 1;
    while (true) {
      const child1Idx = currentIdx * 2;
      const child2Idx = currentIdx * 2 + 1;
      if (child1Idx >= this.storage.length) break;
      const smallerChildIdx =
        this.storage[child1Idx] > this.storage[child2Idx]
          ? child2Idx
          : child1Idx;
      if (this.storage[currentIdx] <= this.storage[smallerChildIdx]) break;
      this.storage[currentIdx] = this.storage[smallerChildIdx];
      this.storage[smallerChildIdx] = lastEl;
      currentIdx = smallerChildIdx;
    }
    return top;
  }

  isValid(childElIdx, parentElIdx) {
    return this.storage[childElIdx] >= this.storage[parentElIdx];
  }
}

const heap = new Heap();
for (let i = 1; i < input.length; i++) {
  heap.push(input[i]);
}

let answer = 0;
while (heap.storage.length > 2) {
  const min1 = heap.pop();
  const min2 = heap.pop();
  const newCard = min1 + min2;
  answer += newCard;
  heap.push(newCard);
}
console.log(answer);
