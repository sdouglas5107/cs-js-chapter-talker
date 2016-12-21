const mongoose = require('mongoose');

const subject = new mongoose.Schema({
    title: { type: String, required: true },
    talk: { type: mongoose.ObjectId, ref: 'Talk', required: true }
});

module.exports = mongoose.model('Subject', subject);
