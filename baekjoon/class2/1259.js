
const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n').map(str => str.trim());
input.pop();
//reverse 함수 사용 안했을 때(까먹었음)
function check(number) {
    let head = 0;
    let tail = number.length - 1;
    while (head < tail) {
        if (number[head] !== number[tail]) return 'no';
        head++;
        tail--
    }
    return 'yes';
}
input.forEach(n => console.log(check(n.trim())));

//reverse 함수 사용
input.forEach(string => {
    console.log(string === string.split('').reverse().join('') ? 'yes':'no');
})
