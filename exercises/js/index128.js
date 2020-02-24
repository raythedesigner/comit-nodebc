/*
Create a new index128.js file
Define a iceCreamFlavors array with 10 flavors
Remove the last 4 elements using pop
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

const londonFog = iceCreamFlavors.pop();
const cottonCandy = iceCreamFlavors.pop();
const maple = iceCreamFlavors.pop();
const caramel = iceCreamFlavors.pop();

console.log(iceCreamFlavors);
console.log(londonFog);
console.log(cottonCandy);
console.log(maple);
console.log(caramel);