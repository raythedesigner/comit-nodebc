/*
Create a new index120.js file
Define a students variable and assign an empty array
Assing students values in the following indexes: 0, 1, 2, 3, 4 and 5
Show the index number and value as otput:
index 0: Marta
*/

students = [];

students[0] = 'Ray';
students[1] = 'Edison';
students[2] = 'Zahra';
students[3] = 'Billie';
students[4] = 'Keyosha';
students[5] = 'Andy';
students[6] = 'Makesh';

function student() {
    for (let i = 0; i <= students.length - 1; i++) {
        console.log(`Index ${i}: ${students[i]}`);
    }
}

student();