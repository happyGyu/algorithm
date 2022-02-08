const input = require('fs').readFileSync('./test.txt').toString().trim().split('\n');

let answer = '';
for (let i = 1; i < input.length; i += 3) {
    const command = input[i];
    const length = +input[i+1]
    const arr = (length === 0)? []:input[i+2].replace(/[^0-9^,]/g,'').split(',');
    let head = 0;
    let tail = arr.length - 1;
    let isReversed = false;
    let isError = false;

    for (let j = 0; j < command.length; j++) {
        if (command[j] === 'R') {
            isReversed = !isReversed;
        } else if (command[j] === 'D') {
            if (head > tail) {
                isError = true;
                break;
            } 
            if (!isReversed) head++;
            else tail--;
        }
    }
    
    if (isError) {
        answer += 'error\n';
    } else {
        const result = arr.splice(head, tail - head + 1);
        if (isReversed) result.reverse();
        answer += `[${String(result)}]\n`;
    }
}
console.log(answer);