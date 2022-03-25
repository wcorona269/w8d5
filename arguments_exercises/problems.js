// first sum
function sum () {
  let total = 0;
  for (let i of arguments) {
    total += i;
  }
  return total;
}


// second sum
function sum (...args) {
  let total = 0;
  for (let i of args) {
    total += i;
  }
  return total;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);






