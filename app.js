'use strict';
let morgan = require('morgan');
let app = require('express')();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let db = mongoose
    .connect('mongodb://localhost/js-chapter')
    .connection;
//DB
mongoose.Promise = require('bluebird');
db.on('error', err => console.log(err));
//Server
app.use(bodyParser.json());
app.use(morgan('dev'));
//Routes
require('./routes')(app);

app.listen(3000, (err) => { if (err) console.log(err) });

module.exports = app;