/*
Create a new index108.js file
Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
The function must sort the params values from lower to higher
Call the function with the following parameters: 10, 8, 25
Show the following result as output: 8, 10, 25
Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
If highToLow is true then you need to show the following output: 25, 10, 8
Call the function again with the following parameters: 10, 8, 25, true
*/

/* // function letsSort(number1, number2, number3, highToLow) {
function letsSort(number1, number2, number3) {
    let numbers = [number1, number2, number3];
    numbers.sort(
        function(a, b) {
            // return (a < b ? highToLow : !highToLow);
            return (a < b ? -1 : 1);
        }
    );
}

// console.log(letsSort(10, 8, 25, true));
console.log(letsSort(10, 8, 25, false)); */

/*
function letsSort(number1, number2, number3) {
    let numbers = [number1, number2, number3];
    function compareFunc(a, b) {
        return a - b;
    }
    return numbers.sort(compareFunc);
}

console.log(letsSort(10, 8, 25));
*/

function letsSort(number1, number2, number3, highToLow) {
    let numbers = [number1, number2, number3];
    if (highToLow) {
        function compareFunc(a, b) {
            return a - b;
        }
    } else {
        function compareFunc(a, b) {
            return b - a;
        }
    }
    return numbers.sort(compareFunc);
}

// console.log(letsSort(10, 8, 25, true));
console.log(letsSort(10, 8, 25, false));