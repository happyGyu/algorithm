const count = Number(require('fs').readFileSync('/dev/stdin').toString());
for (let i = 0; i < count; i++) {
    console.log(' '.repeat(i) + '*'.repeat((count - i) * 2 - 1));
}
for (let i = 2; i <= count; i++) {
    console.log(' '.repeat(count - i) + '*'.repeat(2 * i - 1));
}