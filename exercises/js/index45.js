/*
Create a new index45.js file
Define a playerName variable with the following value: Patrik Laine is lame
Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
Use the slice method to get the following words or phrases from the previous variables:
  - Patrik Laine is
  - jets
  - the best
  - , Go
Use a template variable to create the final result
Change the first jets character to be Capitalized
Create all the variables that you might need to accomplish this objective
The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!
*/

const playerName = 'Patrik Laine is lame';
const teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
const message = 'Winnipeg is the best Canadian city, Go Winnipeg';

let patrikLaineIs = playerName.slice(0, 15);
let jets = teams.slice(-26, -22);
let theBest = message.slice(12, 20);
let go = message.slice(-13, -9);

// console.log(patrikLaineIs);
// console.log(jets);
// console.log(theBest);
// console.log(go);

// console.log(jets.charAt(0).toUpperCase());
// console.log(patrikLaineIs.slice(0, 11).toUpperCase());

console.log(patrikLaineIs.slice(0, 11).toUpperCase() + patrikLaineIs.slice(12) + ' ' + theBest + ' ' + jets.charAt(0).toUpperCase() + jets.slice(1) + ' player' + go + ' ' + jets.charAt(0).toUpperCase() + jets.slice(1));