function solution(id_list, report, k) {
    var answer = [];
    const reportLog = {};
    const mailCount = {};
    
    for (let id of id_list) {
        mailCount[id] = 0;
    }
    
    for (let data of report) {
        const [user, target] = data.split(' ');
        if (reportLog[target] === undefined) {
            reportLog[target] = new Set()
        } 
        reportLog[target].add(user);
    }
    for (let target in reportLog) {
        const reporters = reportLog[target];
        if (reporters.size >= k) {
            for (let reporter of reporters) {
                mailCount[reporter]++; 
            }
        }
    }
    return Object.values(mailCount);
}