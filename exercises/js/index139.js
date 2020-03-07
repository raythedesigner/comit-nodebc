/*
Create a new index139.js file
Define a numbers array with values between 1000 and 1
Iterate over the numbers array and filter the following values creating new arrays for each type:
  - Even numbers
  - Odd numbers
Show the last 10 odd numbers as output
Show the first 20 even numbers as output
*/

let numbers = [];

for (let number = 1000; number >= 1; number--) {
    numbers.push(number);
}

// numbers.forEach(function(number) {
//     console.log(number);
// });

const evenNumbers = numbers.filter(function(even) {
    return even % 2 === 0;
});

// console.log(evenNumbers);

console.log('First 20 Even Numbers: ');
for (let i = 0; i <= 19; i++) {
    console.log(evenNumbers[i]);
}

const oddNumbers = numbers.filter(function(odd) {
    return odd % 2 === 1;
});

// console.log(oddNumbers);

console.log('Last 10 Odd Numbers: ');
for (let x = oddNumbers.length - 10; x <= oddNumbers.length; x++) {
    console.log(oddNumbers[x]);
}