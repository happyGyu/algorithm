const numberNameArr = ['zero','one','two','three','four','five','six','seven','eight','nine'];

function solution(s) {
    let answer = s;
    for (let i = 0; i < numberNameArr.length; i++) {
        answer = answer.split(numberNameArr[i]);
        answer = answer.join(i)
    }
    return Number(answer);
}