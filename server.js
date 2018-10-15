// Simple server for servis SPA applications
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// Morgan middleware
app.use(morgan('dev'));
// Add headers
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, OPTIONS, POST, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Max-Age", "3600");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Authorization, X-Requested-With, Accept"
    );
    next();
});

// view engine setup
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'ejs');

app.get('/*', (req, res) => {
    res.render('index');
});

app.listen(4000, function () {
    console.log('Server listening on port 4000!');
});