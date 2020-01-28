/*
Create a new index43.js file

Define a text variable with the following value: game of thrones

Define 3 variables with the following names:
firstChar
secondChar
thirdChar

Assign the firstChar the first char from the text variable

Assign the secondChar the char at index 5 from the text variable

Assign the thirdChar the char at index 8 from the text variable

Define a variable with the result name and assign the result value from using concat between firstChar, secondChar and thirdChar

Transform the result variable to uppercase

Show the result value as output: the final result is: GOT

What happens when you use an invalid index number (for example, 1000)? Try it!
*/

const text = 'game of thrones';

const firstChar = text.charAt(0);
const secondChar = text.charAt(5);
const thirdChar = text.charAt(8);
// const firstChar = text.charAt(9999);
// const secondChar = text.charAt(1000);
// const thirdChar = text.charAt(1234);

let result = firstChar + secondChar + thirdChar;
result = result.toUpperCase();

console.log(`The final result is: ${result}`);