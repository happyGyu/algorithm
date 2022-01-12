const inputLines = require('fs').readFileSync('./dev/stdin').toString().split('\n');
const [firstV, secondV, multiplier] = inputLines;
const colorArr = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
const answer = (colorArr.indexOf(firstV)*10 + colorArr.indexOf(secondV)) * 10**colorArr.indexOf(multiplier);
console.log(answer)

// const inputLines = require('fs').readFileSync('./dev/stdin').toString().split('\n');
// const [firstV, secondV, multiplier] = inputLines;
// const colorMap = new Map();
// colorMap.set('black',0);
// colorMap.set('brown',1);
// colorMap.set('red',2);
// colorMap.set('orange',3);
// colorMap.set('yellow',4);
// colorMap.set('green',5);
// colorMap.set('blue',6);
// colorMap.set('violet',7);
// colorMap.set('grey',8);
// colorMap.set('white',9);

// const answer = (colorMap.get(firstV)*10 + colorMap.get(secondV)) * 10**colorMap.get(multiplier);
// console.log(answer)