/*
Create a new index85.js file
Copy and paste the code from exercise 75
Refactor the code to use do/while instead of while
*/

let n = 1;
let f = 0;
let f1 = -1;
let f2 = 1;

do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
    n++;
} while (n <= 10);