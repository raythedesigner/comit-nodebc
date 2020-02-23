/*
var person = {
    name: "John Rambo",
    age: 33,
    address: "170 Richards Street"
}

console.log(person.name);
console.log(person.age);
console.log(person.address);
*/

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)