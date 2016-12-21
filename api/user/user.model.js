let mongoose = require('mongoose');

let User = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, lowercase: true },
    password: { type: String, required: true }
});
module.exports = mongoose.model('User', User);