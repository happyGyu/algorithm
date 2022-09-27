function solution(enroll, referral, seller, amount) {
  const answer = new Array(enroll.length).fill(0);
  const nameAndIndexDic = {};
  for (let i = 0; i < enroll.length; i++) {
    nameAndIndexDic[enroll[i]] = i;
  }

  for (let i = 0; i < seller.length; i++) {
    let mainOwner = seller[i];
    let income = amount[i] * 100;
    while (true) {
      const idx = nameAndIndexDic[mainOwner];
      const fees = parseInt(income * 0.1);
      answer[idx] += income - fees;
      const boss = referral[idx];
      if (!fees || boss === '-') break;
      else {
        mainOwner = boss;
        income = fees;
      }
    }
  }

  return answer;
}
