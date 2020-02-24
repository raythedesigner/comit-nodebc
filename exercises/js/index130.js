/*
Create a new index130.js file
Define a mutants array with the following values:
--------
  - Professor X
  - Cyclops
  - Iceman
  - Angel
  - Beast
  - Phoenix
--------
  Sort the list
Reverse the sorted list
Join all mutants name using the following text: '* '
Show the following output:
  - Original mutants list
  - Sorted mutants list
  - Reversed mutants list
  - Mutants name separated by *
*/

const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix'
];

console.log(mutants);

// Didn't work
/*
const mutantsSorted = mutants.sort(function(a, b) {
    if (a.mutants < b.mutants) {
        return -1;
    } else if (a.mutants > b.mutants) {
        return 1;
    } else {
        return 0;
    }
});
*/

// This worked
const mutantsSorted = mutants.slice().sort();

console.log(mutantsSorted);

const mutantsReversed = mutantsSorted.reverse();
const mutantsJoined = mutants.join('* ');

console.log(mutantsReversed);
console.log(mutantsJoined);