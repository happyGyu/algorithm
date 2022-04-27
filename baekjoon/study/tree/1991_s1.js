const input = require("fs")
  .readFileSync("./test.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map((line) => line.split(" "));
const tree = {};
for (let i = 1; i < input.length; i++) {
  tree[input[i][0]] = [input[i][1], input[i][2]];
}

let preOrderAnswer = "";
function preOrder(parent) {
  preOrderAnswer += parent;
  if (tree[parent][0] !== ".") {
    preOrder(tree[parent][0]);
  }
  if (tree[parent][1] !== ".") {
    preOrder(tree[parent][1]);
  }
}

let middleOrderAnwer = "";
function middleOrder(parent) {
  if (tree[parent][0] !== ".") {
    middleOrder(tree[parent][0]);
  }
  middleOrderAnwer += parent;
  if (tree[parent][1] !== ".") {
    middleOrder(tree[parent][1]);
  }
}

let postOrderAnswer = "";
function postOrder(parent) {
  if (tree[parent][0] !== ".") {
    postOrder(tree[parent][0]);
  }
  if (tree[parent][1] !== ".") {
    postOrder(tree[parent][1]);
  }
  postOrderAnswer += parent;
}

preOrder("A");
middleOrder("A");
postOrder("A");
console.log(preOrderAnswer);
console.log(middleOrderAnwer);
console.log(postOrderAnswer);
