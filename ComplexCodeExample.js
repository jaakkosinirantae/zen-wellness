/* 
Filename: ComplexCodeExample.js
Content: A complex code example showcasing various advanced JavaScript concepts and techniques.
*/

// Importing external libraries
const moment = require('moment');
const _ = require('lodash');

// Defining a class for a complex object
class ComplexObject {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getFormattedAge() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Creating instances of the complex object
const obj1 = new ComplexObject("John", 25);
const obj2 = new ComplexObject("Sarah", 30);

// Creating an array of complex objects
const complexObjectArray = [obj1, obj2];

// Mapping over the array using lodash for advanced operations
const formattedAges = _.map(complexObjectArray, (obj) => obj.getFormattedAge());
console.log(formattedAges);

// Using a callback function to perform an asynchronous operation
function asyncOperation(callback) {
  setTimeout(() => {
    callback("Async operation complete!");
  }, 2000);
}

// Calling the asynchronous operation
asyncOperation((result) => {
  console.log(result);
});

// Using a promise to handle asynchronous operations
function promiseFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 3000);
  });
}

// Handling the promise using async/await
async function handlePromise() {
  try {
    const result = await promiseFunction();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

handlePromise();

// Using moment.js library for advanced date manipulation
const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(currentDate);

// Complex mathematical operation using recursion and memoization
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}

console.log(fibonacci(10));

// Complex data transformation using built-in array methods
const numbers = [1, 2, 3, 4, 5];

const transformedNumbers = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(transformedNumbers);

// Complex regular expression for validation
const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const email = "example@example.com";
console.log(emailRegex.test(email));