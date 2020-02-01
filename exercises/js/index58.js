/*
Create a new index58.js file
Define a hour variable
Asing the hour variable a value between 1 and 24
If hour is bettwen 5 to 12 show the following message: Good morning
If hour is bettwen 12 to 18 show the following message: Good afternoon
If hour is bettwen 18 to 22 show the following message: Good evening
If hour is bettwen 22 to 5 show the following message: Good night
Change the hour value to test each case
*/

let hour = 21;

if (5 <= hour && hour < 12) {
    console.log('Good morning');
} else if (12 <= hour && hour < 18) {
    console.log('Good afternoon');
} else if (18 <= hour && hour < 22) {
    console.log('Good evening');
} else if (22 <= hour || hour < 5) {
    console.log('Good night');
}