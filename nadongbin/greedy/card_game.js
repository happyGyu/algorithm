const input = require('fs').readFileSync('./card_game_input2.txt').toString().trim().split('\n');
const cards = input.slice(1);
// 문제 조건에서 input의 개수가 최대 10000개이므로 브루트포스하게 풀었다..
const minCards = cards.map(row => Math.min(...row.trim().split(' ').map(n => parseInt(n))));
console.log(Math.max(...minCards));