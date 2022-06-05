function solution(str1, str2) {
  const replacedStr1 = str1.toLowerCase().replace(/[^a-z]/g, " ");
  const replacedStr2 = str2.toLowerCase().replace(/[^a-z]/g, " ");
  const str1Arr = makeArr(replacedStr1);
  const str2Arr = makeArr(replacedStr2);
  let remain = str2Arr.slice();
  const intersection = str1Arr.filter((s) => {
    const idx = remain.indexOf(s);
    if (idx === -1) return false;
    remain.splice(idx, 1);
    return true;
  });
  const unionLength = str1Arr.length + str2Arr.length - intersection.length;
  const answer = unionLength ? intersection.length / unionLength : 1;
  return Math.floor(answer * 65536);
}

function makeArr(str) {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const temp = str.slice(i, i + 2);
    if (temp.trim().length !== 2) continue;
    arr.push(temp);
  }
  return arr;
}
