/*
Create a new index151.js
Define a groot object
Add 2 methods, greet and speak
Both methods will return the following phrase:
--------
    I'm Groot!!
--------
Using console.log call both methods (one time each) and show the following output:
--------
    Greet: I'm Groot!!
    Seack: I'm Groot!!
--------
*/

const groot = {
    greet: function() {
        return 'I\'m Groot!!';
    },
    speak: function() {
        return 'I\'m Groot!!';
    }
};

console.log(`Greet: ${groot.greet()}`);
console.log(`Speak: ${groot.speak()}`);