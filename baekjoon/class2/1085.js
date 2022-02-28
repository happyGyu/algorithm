const [ x, y, w, h ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(n => Number(n));
console.log(Math.min( x, y, w-x, h-y ));