
const greet = require('./greeter');

greet('Johnny', 'B. Goode', () => console.log('We`re using node modules yeah!!!'));


/*
const greet = require('./greeter')

const callbackFunction = () => console.log('Hello from callback')

greet('Johnny', 'B. Goode', callbackFunction)
*/

/*
const greet = require('./greeter')

const callbackFunction = () => console.log('Hello from callback')

greet('Johnny', 'B.Goode', callbackFunction)

//We can also call the function here
callbackFunction();
*/