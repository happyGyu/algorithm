function solution(array, commands) {
    const answer = [];
    commands.forEach((command) => {
        const partial = array.slice(command[0] - 1, command[1]);
        partial.sort((a,b) => a - b);
        answer.push(partial[command[2] - 1]);
    });
    return answer;
}