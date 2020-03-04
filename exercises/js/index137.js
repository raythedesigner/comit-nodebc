/*
Create a new index137.js file
Define a numbers array with values between 1 and 1000
Iterate over each numbers item using map and increment the value in 10
--------
    If value is 1 then it should be 11
    If value is 2 then it should be 12
    and so on..
--------
Show the following output for each element:
--------
    index: 1, original number: 1, incremented value: 11
--------
*/

let numbers = [];

for (let number = 1; number <= 1000; number++) {
    numbers.push(number);
}

incrementedNumbers = numbers.map(function(n) {
    return n += 10;
});

// numbers.forEach(function(number, index) {
//     console.log(`Index: ${index + 1}, Original Number: ${number}`);
// });

// incrementedNumbers.forEach(function(incrementedNumber, index) {
//     console.log(`Index: ${index + 1}, Incremented Number: ${incrementedNumber}`);
// });

for (let index = 1; index <= 1000; index++) {
    console.log(`Index: ${index}, Original Number: ${numbers[index - 1]}, Incremented Number: ${incrementedNumbers[index - 1]}`);
}