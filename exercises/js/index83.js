/*
Create a new index83.js file
Copy and paste the code from exercise 73
Refactor the code to use do/while instead of while
*/

let symbol = '*************';

do {
    console.log(symbol);
    symbol = symbol.slice(1, symbol.length - 1);
} while (symbol.length >= 1);