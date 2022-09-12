function solution(p) {
    console.log(seperate(p))
    var answer = '';
    return answer;
}

function seperate(p) {
    const pArr = p.split('');
    let leftCnt = 0;
    let rightCnt = 0;
    let u = '';
    
    while (pArr.length) {
        const curr = pArr.shift();
        if (curr === '(') {
            rightCnt++;
        } else {
            leftCnt++;
        }
        u += curr;
        if (rightCnt === leftCnt) {
            const v = pArr.join('')
            return [u, v]
        }
    }
}