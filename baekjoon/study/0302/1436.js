//영화감독 숌

const target = Number(require('fs').readFileSync('/dev/stdin').toString());
let order = 0;
let curr = 665;
while (order !== target) {
    curr++;
    if (String(curr).indexOf('666') !== -1) order++;
}
console.log(curr);