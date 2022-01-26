function timeConversion(s) {
    const meridiem = s.slice(8);
    const digits = s.slice(0,8).split(':');
    if (meridiem === 'AM' && digits[0] === '12') digits[0] = '00';
    else if (meridiem === 'PM' && digits[0] !== '12') digits[0] = Number(digits[0]) + 12;
    return digits.join(':');
}