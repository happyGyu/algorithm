function solution(answers) {
    const patterns = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]];
    const record = [];
    patterns.forEach((pattern, i) => {
        record.push(countAnswer(answers, pattern));
    });
    const max = Math.max(...record);
    const answer = [];
    record.forEach((score, i) => {
        if (score === max) answer.push(i + 1);
    })
    return answer;
}

function countAnswer(answers, pattern) {
    let cnt = 0;
    answers.forEach((n, i) => {
        if (n === pattern[i % pattern.length]) cnt++;
    });
    return cnt;
}