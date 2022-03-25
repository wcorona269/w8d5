// version 1

// Function.prototype.curry = function (numArgs) {

//   const numbers = [];
//   return function _curriedSum(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       return numbers.sum();
//     } else {
//         return _curriedSum;
//     }
//   };
// };


// version 2
// Function.prototype.curry = function (numArgs) {

//   const numbers = [];
//   return function _curriedSum(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       return numbers.sum();
//     } else {
//       return _curriedSum;
//     }
//   };
// };


// monkey-patched sum
// Array.prototype.sum = function () {
//   let total = 0;
//   for (var ele of this) {
  //     total += ele;
//   }
//   return total;
// };


// version 3
Function.prototype.curry = function (numArgs) {
  
  const numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  };
};

// non monkey patched sum
function sum (...args) {
  let total = 0;
  for (var ele of args) {
    total += ele;
  }
  return total;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30

