/*
Create a new index130.js file
Define a mutants array with the following values:
  - Professor X
  - Cyclops
  - Iceman
  - Angel
  - Beast
  - Phoenix
Sort the list
Reverse the sorted list
Join all mutants name using the following text: '* '
Show the following output:
  - Original mutants list
  - Sorted mutants list
  - Reversed mutants list
  - Mutants name separated by *
*/


/*
// Solution

const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Beast',
    'Phoenix'
]
console.log('original list:', mutants)
let sorted_array=mutants.sort();
console.log('Sorted list:', mutants)
let reversed_array = sorted_array.reverse();
console.log('Reversed list: ', mutants)
let joined_array = reversed_array.join(' * ');
console.log('joined list:', joined_array);
*/

/*
// Original Solution

const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix']
console.log('original list:', mutants)
let sorted_array = mutants.sort();
console.log('Sorted list:', mutants)
let reversed_array = sorted_array.reverse();
console.log('Reversed list: ', mutants)
let joined_array = reversed_array.join(' * ');
console.log('joined list:', joined_array);
*/

// Scope Explanation

// GLOBAL SCOPE
const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Beast', 'Phoenix']
function manipulate_mutants(mutants) { // Function declaration
    // FUNCTIONAL SCOPE
    console.log('original list:', mutants)
    let sorted_array = mutants.slice().sort();
    console.log('Sorted list:', sorted_array)
    let reversed_array = sorted_array.reverse();
    console.log('Reversed list: ', reversed_array)
    let joined_array = reversed_array.join(' * ');
    console.log('joined list:', joined_array);
}
manipulate_mutants(mutants) // Function execution
console.log('ORIGINAL ARRAY', mutants);