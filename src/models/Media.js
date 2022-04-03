const mongoose = require('mongoose')

module.exports = mongoose.model('media', new mongoose.Schema({
    type: String,
    title: String,
    director: [],
    cast: [],
    country: String,
    release_year: String,
    duration: String,
    listed_in: [],
    description: String,
    services: [],
    rating: String
}));