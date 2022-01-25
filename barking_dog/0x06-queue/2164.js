const num = 6;
const arr = new Array(num + 1).fill().map((n,i) => i);
let pointer = 1;

for (let i = 1; i < num; i++) {
    pointer++;
    arr.push(arr[pointer]);
    pointer++;
}
console.log(arr[pointer]);