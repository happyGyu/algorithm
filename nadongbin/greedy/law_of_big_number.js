const input = require('fs').readFileSync('./law_of_big_number_input1.txt').toString().trim().split('\n');
const [n, m, k] = input[0].split(' ').map(n => parseInt(n));
const arr = input[1].split(' ').map(n => parseInt(n));
arr.sort((a,b) => b - a);
const first = arr[0];
const second = arr[1];

//풀이1: O(M)이므로 M이 크면 불가
let cnt = 0;
let answer = 0;
for (let i = 0; i < m; i++) {
    if (cnt < k) {
        answer += first;
        cnt += 1;
    } else {
        cnt = 0;
        answer += second;
    }
}

//풀이2: 반복성을 이용해서 계산시간을 낮춤.
const quotient = parseInt(m / (k + 1));
const remainder = m % (k + 1);
let answer = quotient * (first * k + second);
for (let i = 0; i < remainder; i++) {
    answer += first;
}

console.log(answer);

