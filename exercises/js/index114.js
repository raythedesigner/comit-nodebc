/*
Create a new index114.js file
Define a revert function that accepts a string parameter
This function shows the reverted text parameter
For example if you call the revert function with 'hello' the function will show: olleh
Call this function using at least 5 different words :)
*/

function revert(string) {
    const text = string;
    let resultRevert = "";
    for (let i = text.length - 1; i >= 0; i--) {
        resultRevert += text[i]
    };
    return resultRevert;
}

console.log(revert('Guns N\' Roses'));
console.log(revert('Led Zeppelin'));
console.log(revert('Aerosmith'));