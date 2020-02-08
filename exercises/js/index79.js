/*
Create a new index79.js file
Copy and paste the code from exercise 69
Refactor the code to use do/while instead of while
*/

let number = 0;
let sum = null;

do {
    sum += number;
    number++;
} while (number <= 1000);

console.log(`The sum of numbers between 0 and 1000 is ${sum}.`)