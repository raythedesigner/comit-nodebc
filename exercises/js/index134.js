/*
Create a new index134.js file
Define a numbers array
Assign values between 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
--------
1
3
6
... so on
--------
If the final result equals 500500 then show the following output: Good job!!!
Else show: Take a look to see if something is wrong
*/

let numbers = [];

for (let i = 1; i <= 1000; i++) {
    numbers.push(i);
}

console.log(numbers);

let result = 0;
for (i = 0; i <= numbers.length - 1; i++) {
    console.log(result);
    result += numbers[i];
}
console.log(`Final Result: ${result}`);
if (result == 500500) {
    console.log('Good job!');
} else {
    console.log(' a look to see if something is wrong.');
}