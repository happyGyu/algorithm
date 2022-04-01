const input = require("fs")
    .readFileSync("./test.txt")
    .toString()
    .trim()
    .split("\n")
    .map((line) =>
        line
            .trim()
            .split(" ")
            .map((n) => Number(n))
    );
const [optionNum, goalScore] = input.shift();
const thirdPlayerPlan = input.pop();
const secondPlayerPlan = input.pop();
const map = input;

const options = new Array(optionNum).fill().map((n, i) => i + 1);
const playerInfo = [{ score: 0 }, { score: 0, plan: secondPlayerPlan }, { score: 0, plan: thirdPlayerPlan }];

const lineUp = [0, 1];
const sub = [2];

function getPlans(options) {
    const results = [];
    if (options.length === 1) return options;

    for (let i = 0; i < options.length; i++) {
        const restOptions = [...options.slice(0, i), ...options.slice(i + 1)];
        const plans = getPlans(restOptions);
        const attached = plans.map((plan) => String(options[i]) + String(plan));
        results.push(...attached);
    }
    return results;
}


function match(option, opponent) {
    const opponentOption = playerInfo[opponent].plan.shift();
    if (map[option][opponentOption] === 2) {
        return true;
    }
    return false;
}

function solution(options, playerInfo) {
    for (let i = 0; i < remainOptions.length; i++) {
        const remainOptions = options.slice();
        const selectedOption = options.splice(i, 1)[0];
        match(selectedOption, opponent);
        solution(remainOptions);
    }
}

function checkSucess() {
    return playerInfo[0].score === goalScore;
}

function checkFailure(remainOptions) {
    return (
        remainOptions.length === 0 || playerInfo[1].score === goalScore || playerInfo[2].score === goalScore
    );
}
