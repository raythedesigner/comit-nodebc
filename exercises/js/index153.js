/*
Create a new index153.js
Define a arithmetic variable and assing a literal value with the following methods:
    - add
    - subtract
    - multiply
    - divide
    - remainder
Each method accepts 2 numeric parameters and shows the operation result
So, add will add both numbers together and log the result (the rest of the methods work in the same way)
Show an error if the parameters values are not numbers
Call the methods:
----
  add(2, 10)
  subtract(10, 5)
  multiply(3, 100)
  divide(40, 2)
  remainder(20, 2)
----
*/

const arithmetic = {
    add: function(x, y) {
        if (typeof x != 'number' || typeof y != 'number') {
            console.log('ERROR');
        } else {
            console.log(x + y);
        }
    },
    subtract: function(x, y) {
        if (typeof x != 'number' || typeof y != 'number') {
            console.log('ERROR');
        } else {
            console.log(x - y);
        }
    },
    multiply: function(x, y) {
        if (typeof x != 'number' || typeof y != 'number') {
            console.log('ERROR');
        } else {
            console.log(x * y);
        }
    },
    divide: function(x, y) {
        if (typeof x != 'number' || typeof y != 'number') {
            console.log('ERROR');
        } else {
            console.log(x / y);
        }
    },
    remainder: function(x, y) {
        if (typeof x != 'number' || typeof y != 'number') {
            console.log('ERROR');
        } else {
            console.log(x % y);
        }
    }
};

arithmetic.add(2, 10);
arithmetic.subtract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);