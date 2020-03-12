/*
Create a new index147.js
Copy and paste the code from the previous exercise
Refactor the code to match the requirements
The shouldOpenBatCave function no longer accepts two parameters
Now the shouldOpenBatCave function only accepts a user parameter
Instead of calling the shouldOpenBatCave function passing username and password now we only pass the user object
The rest of the code should still work the same way and show the proper output
*/

let user = {
    username: 'batman',
    password: 'Alfred1960ROCKS!'
};

const shouldOpenBatCave = function(user) {
    if (user.username == 'batman' && user.password == 'Alfred1960KPO!') {
        return true;
    } else {
        return false;
    }
};

if (shouldOpenBatCave(user) == true) {
    console.log('Welcome back batman!!');
} else {
    console.log('Sorry, you can\'t enter the Batcave, try again...');
}

user.password = 'Alfred1960KPO!';

if (shouldOpenBatCave(user) == true) {
    console.log('Welcome back batman!!');
} else {
    console.log('Sorry, you can\'t enter the Batcave, try again...');
}