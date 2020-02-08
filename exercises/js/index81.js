/*
Create a new index81.js file
Copy and paste the code from exercise 71
Refactor the code to use do/while instead of while
*/

const multiplier = 9;
let multiplicand = 1;

do {
    console.log(`The product of ${multiplier} and ${multiplicand} is ${multiplier * multiplicand}.`);
    multiplicand++;
} while (multiplicand <= 10);