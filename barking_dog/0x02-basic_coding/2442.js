const count = Number(require('fs').readFileSync('/dev/stdin').toString());
for (let i = 1; i <= count; i++) {
    console.log(' '.repeat(count - i) + '*'.repeat(2 * i - 1));
}