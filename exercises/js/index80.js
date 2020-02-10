/*
Create a new index80.js file
Copy and paste the code from exercise 70
Refactor the code to use do/while instead of while
*/

let number = 0;
let sum = null;

do {
    sum += number;
    if (number != 0) {
        number += 2;
    } else {
        number++;
    }
} while (number <= 1000);

console.log(`The sum of odd numbers between 0 and 1000 is ${sum}.`);