function solution(numbers, hand) {
    var answer = '';
    const posArr = [[3,1],[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
    let leftPos = [3,0];
    let rightPos = [3,2];
    for (let num of numbers) {
        if ([1,4,7].includes(num)) {
            answer += 'L';
            leftPos = posArr[num];
        } else if ([3,6,9].includes(num)) {
            answer += 'R';
            rightPos = posArr[num];
        } else {
            const leftDist = calDistance(posArr[num], leftPos);
            const rightDist = calDistance(posArr[num], rightPos);
            if (leftDist < rightDist || (leftDist === rightDist && hand === 'left')) {
                answer += 'L';
                leftPos = posArr[num];
            } else if (leftDist > rightDist || (leftDist === rightDist && hand === 'right')) {
                answer += 'R';
                rightPos = posArr[num];
            } 
        }
    }
    return answer;
}

function calDistance(pos1, pos2) {
    return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
}