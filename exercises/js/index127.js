/*
Create a new index127.js file
Define a iceCreamFlavors array with 10 flavors
Remove the first 2 elements using shift
Show the iceCreamFlavors items as output
Show each removed flavor
*/

const iceCreamFlavors = [
    'milk',
    'vanilla',
    'strawberry',
    'chocolate',
    'mint chocolate chip',
    'candy cane',
    'caramel',
    'maple',
    'cotton candy',
    'london fog'
];

const milk = iceCreamFlavors.shift();
const vanilla = iceCreamFlavors.shift();

console.log(iceCreamFlavors);
console.log(milk);
console.log(vanilla);