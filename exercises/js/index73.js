/*
Create a new index73.js file
Show the following output using while:
*************
************
***********
**********
*********
********
*******
******
*****
****
***
**
*
*/

let symbol = '*************';

while (symbol.length >= 1) {
    console.log(symbol);
    symbol = symbol.slice(1, symbol.length - 1);
}