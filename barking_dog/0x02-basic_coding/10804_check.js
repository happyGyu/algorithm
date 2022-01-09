const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

//이하는 내 원래 코드. splice 함수의 기능을 잘 몰랐어서 이렇게 했었다. 
//slice한 뒤 하나씩 교체해주는 방식이다.

// for (let i = 0; i < input.length; i++) {
//     const [a, b] = input[i].trim().split(' ').map(n => parseInt(n));
//     const reverse = arr.slice(a - 1, b).reverse();
//     for (let j = a; j <= b; j++) {
//         arr[j - 1] = reverse[j - a];
//     }
// }
// console.log(arr.join(' '));


//splice의 경우 단순히 잘라내는 것 뿐 아니라 그 뒤에 인자를 넣으면 잘라낸 자리에 다른 값을 집어넣을 수 있다
//참고로 잘라낸 수보다 넣은 요소가 적으면 배열 길이자체가 짧아진다
// 그리고 splice함수의 두번째 인자는 slice와 다르게 인덱스 값이 아닌 잘라낼 갯수이다! 유의하자!

for (let i  = 0; i < input.length; i++) {
    const [a, b] = input[i].trim().split(' ').map(n => parseInt(n));
    const reverse = arr.slice(a - 1, b).reverse();
    arr.splice(a - 1, b - a + 1, ...reverse)
}
console.log(arr.join(' '));