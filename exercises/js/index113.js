/*
Create a new index113.js file
Define the function getShapePerimeter that accepts 2 parameters: base and height
If base and height are equal then calculate the perimeter of a square
If base and height are not equal then calculate the perimeter of a rectangle
This function returns a number that represents the shape perimeter
Show the following output: %perimeter% is the shape perimeter
If the perimeter is bigger than 100 then show the following output: The perimeter is too big
Else show the following message: The perimeter is fine
Call this function a couple of times with different values
Test all possible cases
*/

/* function getShapePerimeter(base, height) {
    if (base == height) {
        return `${base * 4} is the shape perimeter.`;
    } else if (base != height) {
        return `${base * 2 + height * 2} is the shape perimeter.`;
    }
} */

function getShapePerimeter(base, height) {
    let perimeter;
    if (base == height) {
        perimeter = base * 4;
        console.log(`${perimeter} is the shape perimeter.`)
    } else if (base != height) {
        perimeter = base * 2 + height * 2;
        console.log(`${perimeter} is the shape perimeter.`)
    }
    if (perimeter > 100) {
        console.log('The perimeter is too big.')
    } else {
        console.log('The perimeter is fine.')
    }
}

// getShapePerimeter(47, 49);
// getShapePerimeter(99, 99);
getShapePerimeter(9, 7);