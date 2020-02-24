/*
Create a new index131.js file
Define a femaleStudents array and assign 5 students
Define a maleStudents array and assign 5 students
Define a students array and assign all students name using the femaleStudents and maleStudents arrays
Sort the students list
Show the following output:
  - Each femaleStudents name using numeric indexes
  - Each maleStudents name using while
  - Each students name using for
*/

const femaleStudents = [
    'Alice',
    'Mary',
    'Clare',
    'Brittany',
    'Melissa'
]

const maleStudents = [
    'Alex',
    'Peter',
    'John',
    'Victor',
    'Mark'
]

let students = femaleStudents.concat(maleStudents);

students = students.slice().sort();

// console.log(femaleStudents);
// console.log(maleStudents);
// console.log(students);

console.log('Female Students:'.toUpperCase());

console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);

console.log('\nMale Students:'.toUpperCase());

let maleStudentsIndex = 0;
while (maleStudentsIndex <= maleStudents.length - 1) {
    console.log(maleStudents[maleStudentsIndex]);
    maleStudentsIndex++;
}

console.log('\nAll Students:'.toUpperCase());

for (let studentsIndex = 0; studentsIndex <= students.length - 1; studentsIndex++) {
    console.log(students[studentsIndex]);
}