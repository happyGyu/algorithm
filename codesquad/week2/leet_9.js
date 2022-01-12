/**
 * @param {number} x
 * @return {boolean}
 */
 const isPalindrome = function(x) {
    const reversed = String(x).split('').reverse().join('');
    return String(x) === reversed;
};