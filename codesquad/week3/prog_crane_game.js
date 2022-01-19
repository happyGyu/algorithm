function solution(board, moves) {
    let answer = 0;
    let bucket = [];
    moves.forEach(move => {
        for (let i = 0; i < board.length; i++) {
            const curr = board[i][move - 1];
            if (curr !== 0) {
                if (bucket[bucket.length - 1] === curr) {
                    bucket.pop();
                    answer += 2;
                } else {
                    bucket.push(curr);
                }
                board[i][move - 1] = 0;
                break;
            }  
        }
    });
    return answer;
}