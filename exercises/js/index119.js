/*
Create a new index119.js file
Define the following array:
  const data = [42, true, function() {return 'The meaning of life is: '}];
If the second item from data is true then show the following output using the first and last items from the data array:
  The meaning of life is: 42
*/

const data = [
    42,
    true,
    function() {
        return 'The meaning of life is: '
    }
];

if (data[1] == true) {
    console.log(data[2]() + data[0]);
}

// const meaningOfLife = data[2];

// if (data[1] == true) {
//     console.log(meaningOfLife() + data[0]);
// }