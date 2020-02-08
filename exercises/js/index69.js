/*
Create a new index69.js file
Use while structure to sum numbers between 0 and 1000
Show the partial result as output too
*/

// let number = 0;

// while (number <= 1000) {
//     console.log(number);
//     if (number == 0) {
//         number += 1;
//     } else {
//         number += number;
//     }
// }

let number = 0;
let sum = null;

while (number <= 1000) {
    sum += number;
    number++;
}

console.log(`The sum of numbers between 0 and 1000 is ${sum}.`)