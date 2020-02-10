/*
Create a new index93.js file
Copy and paste the code from exercise 83
Refactor the code to use for instead of do/while
*/

for (let symbol = '*************'; symbol.length >= 1; symbol = symbol.slice(1, symbol.length - 1)) {
    console.log(symbol);
}