/*
Create a new index124.js file
Define a movies array with at least 10 movies that you really like
Show the first and last movie name from the movies array
To show the last item you need to use the movies lenght property to make it dynamic
*/

let movies = [
    'Wedding Crashers',
    'Marvel Cinematic Universe',
    'DC Extended Universe',
    'The Internship',
    'The Lord of the Rings',
    'The Wolf of the Wall Street',
    'The Grand Budapest Hotel',
    '007',
    'Inception',
    'Blow'
];

console.log(`${movies[0]}, ${movies[movies.length - 1]}`);