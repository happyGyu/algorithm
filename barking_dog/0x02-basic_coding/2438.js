// 풀이1
const count = Number(require('fs').readFileSync('/dev/stdin').toString());
for (let i = 1; i <= count; i++) {
    console.log('*'.repeat(i))
}

//풀이2
const count = Number(require('fs').readFileSync('/dev/stdin').toString());
let stars = '';
let result = '';
for(let i = 1;i <= count; i++){
	stars += '*';
	result += str + '\n';
}
console.log(result);