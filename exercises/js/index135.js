/*
Create a new index135.js file
Define a mutants array and assign the following values
--------
  - Professor X
  - Cyclops
  - Iceman
  - Angel
  - Magneto
  - Beast
  - Phoenix
  - Logan
  - Gambit
--------
Iterate over each mutants item using forEach
Show the mutant name and position
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

mutants.forEach(function(mutant, position) {
    console.log(`Position: ${position}`);
    console.log(`Name: ${mutant}`);
});