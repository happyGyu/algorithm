function solution(orders, course) {
  const answer = [];
  const sortedOrders = orders.map((order) => order.split('').sort());
  for (const targetNum of course) {
    const tempMenus = new Set();
    sortedOrders.forEach((sortedOrder) =>
      getCombinationStrings(sortedOrder, targetNum).forEach((combinationString) =>
        tempMenus.add(combinationString),
      ),
    );
    let maxOrderedCnt = 2;
    let tempAnswers = [];
    tempMenus.forEach((tempMenu) => {
      const orderedCnt = checkOrderedCnt(orders, tempMenu);
      if (orderedCnt === maxOrderedCnt) {
        tempAnswers.push(tempMenu);
      } else if (orderedCnt > maxOrderedCnt) {
        maxOrderedCnt = orderedCnt;
        tempAnswers = [tempMenu];
      }
    });
    answer.push(...tempAnswers);
  }
  return answer.sort();
}

function checkOrderedCnt(orders, tempMenu) {
  let cnt = 0;
  orders.forEach((order) => {
    if (checkIsChild(order, tempMenu)) {
      cnt++;
    }
  });
  return cnt;
}

function checkIsChild(order, tempMenu) {
  return tempMenu.split('').every((char) => order.includes(char));
}

function getCombinationStrings(arr, targetNum) {
  const combinationStrings = [];
  if (targetNum === 1) return arr;

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const currentCombinations = getCombinationStrings(rest, targetNum - 1);
    const attached = currentCombinations.map((e) => [fixed, ...e].join(''));
    combinationStrings.push(...attached);
  });

  return combinationStrings;
}
