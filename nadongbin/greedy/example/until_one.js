let [n, k] = require('fs').readFileSync('./until_one_input.txt').toString().trim().split(' ').map(n => parseInt(n));

let answer = 0;
while (n !== 1) {
    if (n % k === 0) {
        // n이 k보다 작아지면 굳이 이 반복문 안에 있지말고 나가서 1까지 계속 빼주기만 하는게 더 좋음.
        n /= k;
        answer++;
    } else {
        // n이 아주 큰경우(100억) 이렇게 하나씩 빼면 안됨. 한번에 배수까지 줄어들게 빼야함. (나머지를 뺀다거나.. 굳이 구현은 하지 않았음)
        n--;
        answer++;
    }
}
console.log(answer);