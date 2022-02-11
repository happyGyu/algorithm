const bonusObj = {'S':1, 'D':2, 'T':3};
const optionObj = {'*':2, '#':-1};

function solution(dartResult) {
    const handledResult = dartResult.replace(/10/gi,'X') + '0'
    let pointer = 0;
    let prevScore = 0;
    let total = 0;
    for (let i = 0; i < handledResult.length; i++) {
        if (!isNaN(handledResult[i + 1]) || handledResult[i + 1] === 'X') {
            const curr = handledResult.slice(pointer, i + 1);
            pointer = i + 1;
            [total, prevScore] = calScore(curr, prevScore, total);
        }
    }
    return total;
}

function calScore(curr, prevScore, total) {
    const base = (curr[0] === 'X')? 10 : curr[0];
    const bonus = bonusObj[curr[1]];
    const option = optionObj[curr[2]] === undefined? 1 : optionObj[curr[2]];
    const currScore = base**(bonus) * (option);
    let newTotal = total + currScore;
    if (option == '2') newTotal += prevScore;
    return [newTotal, currScore];
}
