/*
Create a new index95.js file
Copy and paste the code from exercise 85
Refactor the code to use for instead of do/while
*/

let n;
let f = 0;
let f1 = -1;
let f2 = 1;

for (n = 1; n <= 10; n++) {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
}