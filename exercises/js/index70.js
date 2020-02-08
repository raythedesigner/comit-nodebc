/*
Create a new index70.js file
Use while structure to only sum odd numbers between 0 and 1000
Show the partial result as output too
*/

let number = 0;
let sum = null;

while (number <= 1000) {
    sum += number;
    if (number != 0) {
        number += 2;
    } else {
        number++;
    }
}

console.log(`The sum of odd numbers between 0 and 1000 is ${sum}.`)