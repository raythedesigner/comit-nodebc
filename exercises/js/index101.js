/*
Create a new index101.js file
Define a function named showUser that will output the following data:
Your name
Your age
Your phone number
Your street
Your postal code
If you're married or not (boolean)
*/

const name = 'Ray';
const age = 29;
const phoneNumber = '604-729-9635';
const street = '510 – 43 Powell Street';
const postalCode = 'V6A 1E9';
const maritialStatus = false;

function showUser() {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Phone Number: ${phoneNumber}`);
    console.log(`Street Address: ${street}`);
    console.log(`Postal Code: ${postalCode}`);
    console.log(`Married: ${maritialStatus}`);
}

showUser();