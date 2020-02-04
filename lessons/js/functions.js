/* function greeting() { // Declaration
    console.log('Hello');
}

// greeting(); // Execution
// greeting();

for (var i = 0; i < 10; i++) {
    greeting(); // Execution, To invoke, we need parenthesis
}

// Look how we don't name our function, we just assign it

const greeting = function() {
    console.log('Hello');
}
  
greeting(); // Shows Hello as output
greeting(); // Shows Hello as output */

// // // // // // // // // // // // // // // // // // //

/* const greeting = 'Hello';
const sayGreeting = function() {
    console.log('Hello');
}

console.log(greeting, typeof greeting);
console.log(sayGreeting, typeof sayGreeting); */

// // // // // // // // // // // // // // // // // // //

/* function getGreetingMessage() {
    return 'Hello';
}

const todayGreeting = getGreetingMessage;

const anotherOne = todayGreeting();

console.log(anotherOne);
console.log(todayGreeting());
console.log(getGreetingMessage()); */

// // // // // // // // // // // // // // // // // // //

/* function getGreetingMessage(name) {
    return 'Hello ' + name;
}

const todayGreeting = getGreetingMessage;

const anotherOne = todayGreeting('Rambo');

console.log(anotherOne);
console.log(todayGreeting('Batman'));
console.log(getGreetingMessage('VanDamme')); */

// // // // // // // // // // // // // // // // // // //

function getGreetingMessage(name) {
    return `Hello ${name}.`;
}

const todayGreeting = getGreetingMessage('John Rambo');

console.log(todayGreeting);