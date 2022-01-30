const input = 7755;

function solution(input) {
    const arr = String(input).split('');
    const front = arr.slice(0,arr.length / 2).map(n=>parseInt(n)).reduce((acc, n) => acc + n);
    const rear = arr.slice(arr.length/2).map(n=>parseInt(n)).reduce((acc,n) => acc + n);
    return (front === rear)? 'LUCKY' : 'READY';
}

console.log(solution(input));