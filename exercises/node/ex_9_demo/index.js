/* // require the express module
const express = require('express');

// then create a express server
const app = express();

// configure the default route and send a text as response
app.get('/', function(request, response) {
  response.send('Hello Node.js World!');
});

// configure the port that express is going to listen to
app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
}); */

/* const express = require('express');
const Logger = require('logplease')
const app = express();
const logger = Logger.create('server')

app.get('/', function (request, response) {
    response.send('Hello Node.js World!');
});
app.get('/about', function (request, response) {
    response.send('This is my about page');
});
app.get('/contact', function (request, response) {
    response.send('Ths is my contact page');
});

app.listen(3000, function () {
    logger.info('Example app listening on port 3000!');
}); */

/* const express = require('express');
const Logger = require('logplease')
const app = express();
const logger = Logger.create('server')

app.get('/', (request, response) => response.send('Hello Node.js World!'));
app.get('/about', (request, response) => response.send('This is my about page'));
app.get('/contact', (request, response) => response.send('Ths is my contact page'));
app.all('/all', (req, res) => res.send('What do you want? ' + req.method));

app.listen(3000, () => logger.info('Example app listening on port 3000!')); */

/* const express = require('express');
const Logger = require('logplease')
const app = express();
const logger = Logger.create('server')
var bodyParser = require('body-parser')

app.use(bodyParser); //First middleware we are using

app.post('/', (req, res) => {
    res.send(`REQUEST METHOD: ${req.method} - BODY: ${req.body}`)
});

app.listen(3000, () => logger.info('Example app listening on port 3000!')); */

const express = require('express');
const Logger = require('logplease')
const app = express();
const logger = Logger.create('server')
var oneLinerJoke = require('one-liner-joke');

app.get('/:tag1/:tag2', (req, res) => {
    var getRandomJoke1 = oneLinerJoke.getRandomJokeWithTag(req.params.tag1.toUpperCase())
    var getRandomJoke2 = oneLinerJoke.getRandomJokeWithTag(req.params.tag2)

    const response = {
        tag1: req.params.tag1,
        tag2: req.params.tag2,
        joke1: getRandomJoke1.body,
        joke2: getRandomJoke2.body
    }

    res.json(response)
});

app.listen(3000, () => logger.info('Example app listening on port 3000!'));