/*
Create a new index32.js file
Define a height variable and assig the following value: 10
Define a base variable and assig the following value: 4
Calculate the perimiter of the rectangular
Calculate the area of the rectangular
Show both calculation results, height and base length
Use a descriptive message to show all the values
*/

const height = 10;
const base = 4;

const perimiter = 2 * (height + base);
const area = height * base;

console.log(`The perimeter of a rectangle with the height of ${height} and base of ${base} is ${perimiter}, and the area is ${area}.`);