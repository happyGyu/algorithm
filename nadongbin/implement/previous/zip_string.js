function zip(string, unit) {
    let prev = '';
    let cnt = 0;
    let zipCnt = 0;
    for (let i = 0; i < string.length; i += unit) {
        const curr = string.slice(i, i+unit);
        if (prev === curr) {
            cnt++;
        } else {
            zipCnt += cnt * unit - 1;
            cnt = 0;
            prev = curr;
        }
    }
    return zipCnt;
}

function solution(string) {
    let max = 0;
    for (let i = 1; i <= (string.length) / 2; i++) {
        const curr = zip(string, i);
        max = (curr > max)? curr : max;
    }
    return string.length - max;
}

console.log(solution('aabbcc'))