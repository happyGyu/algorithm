const input = +require('fs').readFileSync('./input.txt').toString();

function solution(input) {
  const arr = String(input).split('');
  const front = arr.slice(0, arr.length / 2).reduce((acc, n) => acc + Number(n), 0);
  const rear = arr.slice(arr.length / 2).reduce((acc, n) => acc + Number(n), 0);
  return front === rear ? 'LUCKY' : 'READY';
}

console.log(solution(input));
