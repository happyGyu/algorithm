function solution(s) {
    const words = s.split(' ');
    const answer = words.map(word => {
        const splited = word.split('');
        // 두 칸씩 건너가며 순환을 두 번하는 것과 하나씩 돌며 if로 처리하는 것 중 뭐가 더 빠를까? 
        for (let i = 0; i < splited.length; i += 2) {
            splited[i] = splited[i].toUpperCase();
        }
        for (let i = 1; i < splited.length; i += 2) {
            splited[i] = splited[i].toLowerCase();
        }
        return splited.join('');
    })
    return answer.join(' ');
}