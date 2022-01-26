function diagonalDifference(arr) {
    const size = arr.length;
    const leftToRight = arr.reduce((acc, row, index) => {return acc + row[index]}, 0);
    const rigthToLeft = arr.reduce((acc, row, index) => {return acc + row[size - 1 - index]}, 0);
    return Math.abs(leftToRight - rigthToLeft);
}
