function solution(new_id) {
  return step7(step6(step5(step4(step3(step2(step1(new_id)))))));
}

function step1(id) {
  return id.toLowerCase();
}

function step2(id) {
  return id.replace(/[^\w-_.]/g, "");
}

function step3(id) {
  return id.replace(/[.]+/g, ".");
}

function step4(id) {
  if (id[0] === ".") {
    id = id.slice(1);
  }
  if (id[id.length - 1] === ".") {
    id = id.slice(0, -1);
  }
  return id;
}

function step5(id) {
  if (!id.length) {
    id = "a";
  }
  return id;
}

function step6(id) {
  return step4(id.slice(0, 15));
}

function step7(id) {
  const last = id.slice(-1);
  while (id.length < 3) {
    id += last;
  }
  return id;
}
