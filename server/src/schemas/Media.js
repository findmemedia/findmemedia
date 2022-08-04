const mongoose = require('mongoose')

module.exports = mongoose.model(
    'media',
    new mongoose.Schema({
        details: {
            title: String,
            runtime: Number
        }
    })
);