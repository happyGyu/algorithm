function solution(N, stages) {
    var answer = [];
    const count = new Array(N+1).fill(0);
    const failArr = [];
    for (let i = 0; i < stages.length; i++) {
        count[stages[i]] += 1;
    }
    
    let remainPlayer = stages.length;
    for (let i = 1; i <= N; i++) {
        failArr[i] = count[i] / remainPlayer;
        remainPlayer -= count[i];
        if (remainPlayer === 0) break;
    }
    
    const objArr = [];
    for (let i = 1; i <= N; i++) {
        objArr[i] = {stage: i, fail: failArr[i]}
    }
    objArr.sort((a,b) => {
        return b.fail - a.fail;
    })
    objArr.pop();
    answer = objArr.map(n => n.stage)
    return answer;
}