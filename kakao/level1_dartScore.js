function solution(dartResult) {
    let answer = 0;
    let prev = 0;
    let curr = 0;
    let pointer = 0;
    const multiplierDic = {'S':1, 'D':2, 'T':3};
    const optionDic = {'*':2, '#': -1, 'null':1};
    
    while (pointer < dartResult.length) {
        const temp = +dartResult[pointer];
        const multiplier = dartResult[pointer + 1];
        let option;
        if (['*','#'].includes(dartResult[pointer + 2])) {
            option = dartResult[pointer + 2];
            pointer += 3;
        } else {
            option = 'null';
            pointer += 2;
        }
        console.log(temp, multiplier, option)
        curr = temp**(multiplierDic[multiplier])*(optionDic[option]);
        answer += curr;
        if (option === '*') answer += prev;
        prev = curr;
        console.log(answer);
    }
    return answer;
}