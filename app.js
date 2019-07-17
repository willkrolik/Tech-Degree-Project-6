const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];
//const data = require('./data'); < == I fuck up everything

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { colors });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/layout', (req, res) => {
    res.render('layout');
});

app.get('/project', (req, res) => {
    res.render('project');
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });
  

app.listen(3000, () => {
    console.log('Your app is ready!')
});