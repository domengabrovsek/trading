'use strict';

const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const publicDirectory = path.join(__dirname, '../public');

// tell express from where to server static content (has to be first)
app.use(express.static(publicDirectory));

// set default engine for views (hbs, handlebars.js)
app.set('view engine', 'hbs');

// route for index page
app.get('', (req, res) => {
    res.render('index', {
        title: 'Home'
    });
});

// start server on port 3000
app.listen(3000, () => {
    console.log('Starting server on port 3000.');
});
