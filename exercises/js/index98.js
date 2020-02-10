/*
Create a new index98.js file
Add all the numbers bettwen 0 and 1000 using for statement
The iteration must break if the partial result is bigger than 400
Show the result as output
*/

let sum = null;

for (let number = 0; number <= 1000; number++) {
    sum += number;
    if (sum > 400) {
        break;
    }
}

console.log(`The sum (when limited to under 500) of numbers between 0 and 1000 is ${sum}.`);