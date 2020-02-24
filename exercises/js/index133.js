/*
Create a new index133.js file
Define a mutants array with the following values:
  - Professor X
  - Cyclops
  - Iceman
  - Angel
  - Magneto
  - Beast
  - Phoenix
  - Logan
  - Gambit

First part
----
Iterate over the mutants items
Show each mutant name
Break the execution in case Magneto is part of the mutants list

Second part
----
Fin out Magneto position and remove it from the mutants array
Iterate over the array without Magento on it and show each mutant name in upper case and the item position
*/

const mutants = [
    'Professor X',
    'Cyclops',
    'Iceman',
    'Angel',
    'Magneto',
    'Beast',
    'Phoenix',
    'Logan',
    'Gambit'
];

// First part
console.log('First Part:'.toUpperCase());

for (let mutantsIndex = 0; mutantsIndex <= mutants.length - 1; mutantsIndex++) {
    if (mutants[mutantsIndex] == 'Magneto') {
        break;
    } else {
        console.log(mutants[mutantsIndex]);
    }
}

// Second part
console.log('\nSecond Part:'.toUpperCase());

// console.log(mutants.indexOf('Magneto'));
const magneto = mutants.splice(mutants.indexOf('Magneto'), 1).toString();
// console.log(`Removed: ${magneto}`);
// console.log(mutants);

for (let mutantsIndex = 0; mutantsIndex <= mutants.length - 1; mutantsIndex++) {
    console.log(`Mutant Name: ${mutants[mutantsIndex].toUpperCase()}, Position: ${mutantsIndex}`);
}