function solution(p) {
  if (!p.length) return "";
  const [u, v] = seperate(p);
  if (isValid(u)) return u + solution(v);
  const temp = "(" + solution(v) + ")";
  return temp + reserveDir(u.slice(1, -1));
}

function reserveDir(p) {
  let result = "";
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

function seperate(p) {
  const pArr = p.split("");
  let leftCnt = 0;
  let rightCnt = 0;
  let u = "";
  while (pArr.length) {
    const curr = pArr.shift();
    if (curr === "(") {
      rightCnt++;
    } else {
      leftCnt++;
    }
    u += curr;
    if (rightCnt === leftCnt) {
      const v = pArr.join("");
      return [u, v];
    }
  }
}

function isValid(p) {
  let flag = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      flag++;
    } else {
      flag--;
    }
    if (flag < 0) {
      return false;
    }
  }
  return flag === 0;
}
