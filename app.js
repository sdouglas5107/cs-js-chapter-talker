'use strict';
let morgan = require('morgan');
let app = require('express')();
let db = require('mongoose')
    .connect('mongodb://localhost/js-chapter')
    .connection;

db.on('error', err => console.log(err))
    .once('open', () => console.log("Database Opened"));

app.use(morgan('dev'));

app.get('/', (req, res) => res.json("It's working"));

app.listen(3000, () => console.log("Listening"));