/*
Create a new index89.js file
Copy and paste the code from exercise 79
Refactor the code to use for instead of do/while
*/

let sum = null;

for (let number = 0; number <= 1000; number++) {
    sum += number;
}

console.log(`The sum of numbers between 0 and 1000 is ${sum}.`)