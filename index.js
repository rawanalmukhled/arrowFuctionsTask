// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => `Hello, ${name}`;

// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (num1, num2) => num1 + num2;

// Q3) Write a simple arrow function that squares a number.
const square = (num) => num ** 2;
// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.

const arraySquared = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    let topush = array[i] * array[i];
    newArray.push(topush);
  }
  return newArray;
};

let result = arraySquared([1, 2, 3]);
console.log(result);
