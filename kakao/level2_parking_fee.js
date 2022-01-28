function solution(fees, records) {
    var answer = [];
    const logs = {};
    records.forEach(record => {
        const splited = record.split(' ');
        const carNum = Number(splited[1]);
        const time = calTime(splited[0]);
        if (logs[carNum] === undefined) logs[carNum] = new Array();
        logs[carNum].push(time);
    });
    console.log(logs);
    for (let log in logs) {
        answer.push(calFee(logs[log], fees));
    }

    return answer;
}

function calTime(timeString) {
    const arr = timeString.split(':').map(n => parseInt(n));
    return arr[0] * 60 + arr[1];
}

function calFee(log, fee) {
    if (log.length % 2 === 1) log.push(60*23 + 59);
    let totalTime = 0;
    for (let i = 0; i < log.length; i += 2) {
        totalTime = totalTime + log[i + 1] - log[i];
    }
    if (totalTime < fee[0]) return fee[1];
    return fee[1] + Math.ceil((totalTime - fee[0]) / fee[2]) * fee[3];
}