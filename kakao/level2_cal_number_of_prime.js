function solution(n, k) {
    const converted = convert(n,k);
    const potential = String(converted).split('0');
    let answer = 0;
    potential.forEach(n => {
        if (isPrime(+n)) answer++;
    })
    return answer;
}


function convert(n,k) {
    let converted = '';
    let dec = n;
    while(dec !== 0) {
        converted = String(dec % k) + converted;
        dec = parseInt(dec / k);
    }
    return converted;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; 
    }
    return true;
}