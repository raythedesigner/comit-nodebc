/*
Create a new index111.js file
Define a even function that has one numeric parameter and returns a boolean value
This function must validate if the number passed as parameter is an even number or not (true or false)
Call this function using the following parameters: 2, 5, 3, 24, 12
If the number is even show the following message: %number% is even
Else show the following message: %number% is odd
*/

function even(number) {
    if (number % 2 == 0) {
        // return true;
        return `${number} is even.`
    } else {
        // return false;
        return `${number} is odd.`
    }
}

// console.log(even(2));
// console.log(even(5));
// console.log(even(3));
// console.log(even(24));
console.log(even(12));