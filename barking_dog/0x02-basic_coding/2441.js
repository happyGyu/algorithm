const count = Number(require('fs').readFileSync('/dev/stdin').toString());
for (let i = 0; i < count; i++) {
    console.log(' '.repeat(i) + '*'.repeat(count - i));
}