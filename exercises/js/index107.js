/*
Create a new index107.js file
Define a biggerNumber function that will expect two parameters with the name firstNumber and secondNumber (numeric)
Call the biggerNumber and pass two numbers as parameters 3 for firstNumber and 5 for secondNumber
The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
In this case you need to validate which number is bigger than the other to get the right feature and output
Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
Make sure that the parameters are numbers, you can use typeof for it
Show a error message in case any of the parameters are not number
Call the biggerNumber with the following parameters: 6 and 3
Call the biggerNumber with the following parameters: 2 and 2
*/

function biggerNumber(firstNumber, secondNumber) {
    if (firstNumber > secondNumber) {
        return `Number ${firstNumber} is bigger than ${secondNumber}.`;
    } else if (firstNumber < secondNumber) {
        return `Number ${secondNumber} is bigger than ${firstNumber}.`;
    } else if (firstNumber == secondNumber) {
        return `Both numbers are ${firstNumber}.`;
    } else if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        return 'Both parameters need to be numbers.'
    }
}

// console.log(biggerNumber(3, 5));
// console.log(biggerNumber(6, 3));
// console.log(biggerNumber(2, 2));
console.log(biggerNumber('Hello', 2));