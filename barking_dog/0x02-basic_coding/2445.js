const count = Number(require('fs').readFileSync('/dev/stdin').toString());
for (let i = 1; i <= count; i++) {
    console.log('*'.repeat(i) + ' '.repeat((count - i) * 2) + '*'.repeat(i));
}
for (let i = 1; i < count; i++) {
    console.log('*'.repeat(count - i) + ' '.repeat(2 * i) + '*'.repeat(count - i));
}

//근데 빠른 A + B에서도 배웠다 싶이 이렇게 매번 console.log하는 것 보다 문자열에 다 더해놓고 마지막에 출력하는게 더 빠를듯;