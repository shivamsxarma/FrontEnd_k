// 1. Function Expression Hoisting

// console.log(typeof test);
// var test = function() {
// return 5;
// };
//output = undefined
// 2. Lexical Scoping with Let and Var

let x = 5;
function scopeTest() {
  console.log(x);
  var x = 10;
}
scopeTest();
