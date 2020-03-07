/*
Create a new index142.js
Define a firstPerson variable
Define a secondPerson variable
Assign a new array to each defined variable with the following structure
  - The first item is the person first name (string)
  - The second item is the person last name (string)
  - The third item is the person address (string)
  - The fourth item is the person age (number)
Use the reduce function over the firstPerson & secondPerson to get a string value back from each of them
Compare the strings result to see if they are the same person (if they are they should match)
Try using the same person (with different variables) and also try different people
*/

const firstPerson = ['Yuki', 'Machida', '510 – 43 Powell Street', 29];
// const secondPerson = ['Yuki', 'Machida', '510 – 43 Powell Street', 29];
const secondPerson = ['Erina', 'Takayama', '301 – 609 Gore Avenue', 30];

const person1 = firstPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(person1);

const person2 = secondPerson.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(person2);

if (person1 == person2) {
    console.log(true);
} else {
    console.log(false);
}