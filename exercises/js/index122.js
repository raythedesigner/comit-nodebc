/*
Create a new index122.js file
Define a ingredients array and assign the following values:
  - Pork
  - Tomato
  - Chicken
  - Lettuce
  - Beef
  - Carrots
  - Cucumber
Define a new array with the name vegetarian and assign only the items from the ingridient array (using indexes) that should belong in the vegetarian list
Show the ingredients list as output
Show the vegetarian list as output
Now I'm hungry!
*/

let ingredients = [
    'Pork',
    'Tomato',
    'Chicken',
    'Lettuce',
    'Beef',
    'Carrots',
    'Cucumber'
];

let vegetarian = [];
vegetarian[0] = ingredients[1];
vegetarian[1] = ingredients[3];
vegetarian[2] = ingredients[5];
vegetarian[3] = ingredients[6];

console.log(`Ingredients: ${ingredients}`);
console.log(`Vegetarian: ${vegetarian}`);