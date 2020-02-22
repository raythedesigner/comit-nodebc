/*
Create a new index116.js file
Define the getHexaColor function that accepts one of the following web colors as parameter:
  - white
  - black
  - blue
  - green
  - yellow
  - pink
This function returns the hexa color for the given parameter color:
  - param: white, return value: #FFFFFF
  - param: black, return value: #000000
  - param: blue, return value: #0b24fb
  - param: green, return value: #0e7e12
  - param: yellow, return value: #fffd38
  - param: pink, return value: #fec1cc
The returned value must be a string
Call the function using each posible value as parameter
Show each hexa color as output
*/

function getHexaColour(colour) {
    switch (colour) {
        case 'white':
            console.log('White: #FFFFFF');
            break;
        case 'black':
            console.log('Black: #000000');
            break;
        case 'blue':
            console.log('Blue: #0B24FB');
            break;
        case 'green':
            console.log('Green: #0E7E12');
            break;
        case 'yellow':
            console.log('Yellow: #FFFD38');
            break;
        case 'pink':
            console.log('Pink: #FEC1CC');
            break;
    }
}

getHexaColour('white');
getHexaColour('black');
getHexaColour('blue');
getHexaColour('green');
getHexaColour('yellow');
getHexaColour('pink');