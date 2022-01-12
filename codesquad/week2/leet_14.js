/**
 * @param {string[]} strs
 * @return {string}
 */
 const longestCommonPrefix = function(strs) {
    const lengthArr = strs.map(str => str.length);
    const shortest = Math.min(...lengthArr);
    const splited = strs.map(str => str.split(''));
    
    let answer = '';
    for (let i = 0; i < shortest; i++) {
        let check = true;
        let checker = splited[0][i];
        for (let j = 0; j <splited.length; j++) {
            if (splited[j][i] !== checker) {
                check = false;
                break;
            }
            
        }
        if (check) answer += checker;
        else break;
    }
    return answer;
};