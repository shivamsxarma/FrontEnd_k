// var x = 5;
// function scopeTest() {

// const { cacheSignal } = require("react");

//  console.log(x);
//   var x = 10;
// }
// scopeTest();
// undefined
// 3. Closure Inside a Loop

// function createIncrementer() {
//   let count = 0;
//   return function() {
// 	return ++count;
//   };
// }

// let increment = createIncrementer();
// console.log(increment());
// console.log(increment());
// otp 1,2

// 5. Block Scope with Let

// function blockScope() {
//   let x = 10;
//   if (true) {
// 	let x = 20;
// 	console.log(x);
//   }
//   console.log(x);
// }
// blockScope();

// 6. Function Scope and Closures

// function outer() {
//   var outerVar = "outer";
//   return function inner() {
// 	console.log(outerVar);
//   };
// }
// var innerFunc = outer();
// innerFunc();

//output = outer

// 7. Variable Shadowing

// let a = 10;
// function shadow() {
//   let a = 5;
//   console.log(a);
// }
// shadow();
// console.log(a);
//output 5,10

// 8. Closure and Multiple Functions

// function outerFunc() {
//   let count = 0;
//   return {
// 	increment: function() {
//   	count++;
//   	console.log(count);
// 	},
// 	decrement: function() {
//   	count--;
//   	console.log(count);
// 	}
//   };
// }

// let counter = outerFunc();
// counter.increment();
// counter.decrement();
//output 1 , 0

//  9. Lexical Scoping with Functions

// function outerFunc() {
//   let x = 10;
//   function innerFunc() {
//     console.log(x);
//   }
//   return innerFunc;
// }
// let result = outerFunc();
// result();
// console.log(x)
//output-10

// 10. Hoisting with Function Declarations 
 
 
// function hoistingTest() { 
//   console.log(x); 
//   var x = 10; 
// } 
// hoistingTest(); 

//output-undefined

// 11.Functions and Default Parameters 
// 
 
// function add(a = 5, b = a * 2) { 
//   return a + b; 
// } 
// console.log(add(3)); 
// console.log(add()); 
// otp-9,15

//  12. Closure with State 
 
 
// function createCounter() { 
//   let count = 0; 
//   return function() { 
// 	return ++count; 
//   }; 
// } 
// const counter = createCounter(); 
// console.log(counter()); 
// console.log(counter()); 
//otp-1,2


//  13. Hoisting in Functions 
 
 
// function testHoist() { 
//   console.log(foo); 
//   var foo = 10; 
// } 
// testHoist(); 
 

//output-undefined