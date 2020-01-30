/*
Create a new index44.js file
Define a text variable and assign the following value: HELLO
Define a result variable
Get each char from the text variable and revert the text assigning it to the result variable
At the end you should be able to show the following text: OLLEH
Once you reverted the text, transform it to lowercase
Show the final output: the final result is: olleh
It kind of sound spanish, right?.. ole!!! (lol)
*/

// Solution 1

const text = 'HELLO';

let result;
result = text.charAt(4) + text.charAt(3) + text.charAt(2) + text.charAt(1) + text.charAt(0);

console.log(result);
console.log(`The final result is: ${result.toLowerCase()}`);


// Solution 2

const textHello = "HELLO"; // 5 letters
//   0    1    2    3    4 
// ['H', 'E', 'L', 'L', 'O']
// text[4] = 'O'

var resultOlleh = ""; // Memoization (temp)
var i; // Initialization

for (i = textHello.length - 1; i >=0; i--) {
    console.log("Accumulator: ", i);
    console.log(`Text value when ${i}: ${text[i]}`);
    resultOlleh += textHello[i] // Concatenate as we iterate
    console.log(`Text value when position is ${i}: ${text[i]} - result is: ${result}`)
};

console.log("The final result is: ", resultOlleh.toLowerCase());


// // Solution 3
// const text1 = "HELLO"; // 5 letters
// var text2 = text1.split(''); // manipulating text1
// console.log(`Text1: ${text1} is of type ${typeof text1} - Text2 ${text2} is of type ${typeof text2}`);
// var result2 = text2.reverse(); // reverting the temporary value
// console.log(`Result2 ${result2} is of type ${typeof result2}`);
// var result3 = result2.join('') // manipulating the reverted value
// console.log("the final result is: ", result3.toLowerCase(), typeof result3);



// // Solution 4
// const text1 = 'HELLO'
// console.log(`Reversed text is ${text1.reverse()}`)


// // Solution 5
// const text1 = "HELLO"; // 5 letters
// var text2 = text1.split(''); // text1 is a string
// var result2 = text2.reverse(); // text2 is an object
// var result3 = result2.join('') // result2 is a object
// console.log("the final result is: ",result3.toLowerCase()); // result3 is a string