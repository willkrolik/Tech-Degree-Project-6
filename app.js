const express = require('express');

const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
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

app.listen(3000, () => {
    console.log('Your app is ready!')
});