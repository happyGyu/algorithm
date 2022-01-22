const input = parseInt(require('fs').readFileSync('./time_input.txt').toString());
let no;
if (input >= 3) {
    no = 45*45*(input);
} else {
    no = 45*45*(input + 1);
}
const total = 60*60*(input+1);
console.log(total-no);