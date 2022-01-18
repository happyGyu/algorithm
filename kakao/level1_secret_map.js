function solution(n, arr1, arr2) {
    var answer = [];
    const binaryArr1 = makeBinaryArr(n, arr1);
    const binaryArr2 = makeBinaryArr(n, arr2);
    for (let i = 0; i < n; i++) {
        let temp = '';
        for (let j = 0; j < n; j++) {
            if (binaryArr1[i][j] === '0' && binaryArr2[i][j] === '0') {
                temp += ' ';
            } else {
                temp += '#';
            }
        }
        answer.push(temp);
    }
    return answer;
}

function makeBinary(n, num) {
    let binary = '';
    for (let i = 0;  i < n; i++) {
        binary = `${num % 2}` + binary;
        num = parseInt(num/2)
    }
    return binary
}

function makeBinaryArr(n, arr) {
    const binaryArr = arr.map(num => makeBinary(n,num))
    return binaryArr;
}