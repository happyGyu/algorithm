/**
 * @param {number} x
 * @return {number}
 */
 const reverse = function(x) {
    let sign = 1;
    if (x < 0) {
        sign = -1;
        x *= -1;
    }
    
    const answer = Number(String(x).split('').reverse().join('')) * sign;
    if (answer > 2**31 - 1 || answer < -(2**31)) {
        return 0 
    }
    return answer
};