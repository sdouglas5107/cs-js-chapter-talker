const mongoose = require('mongoose');

let Talk = new mongoose.Schema({
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Talk', Talk);