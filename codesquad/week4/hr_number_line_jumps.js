function kangaroo(x1, v1, x2, v2) {
    const n = (x1 - x2) / (v2 - v1);
    return (Number.isInteger(n) && n > 0)? 'YES' : 'NO';
}
