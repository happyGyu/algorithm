const [x, y] = require('fs').readFileSync('./knight_input.txt').toString().split('');

const banned = [];
if (x === 'a') banned.push(1,2,3,4);
if (x === 'b') banned.push(2,3);
if (x === 'g') banned.push(5,8);
if (x === 'h') banned.push(5,6,7,8);

if (y === '1') banned.push(1,2,7,8);
if (y === '2') banned.push(1,8);
if (y === '7') banned.push(4,5);
if (y === '8') banned.push(3,4,5,6);

const set = new Set(banned);
console.log(8 - Array.from(set).length);

