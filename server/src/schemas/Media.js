const mongoose = require('mongoose')

module.exports = mongoose.model(
    'media',
    new mongoose.Schema({
        details: {
            title: String,
            genres: Array,
            poster_path: String,
            belongs_to_collection: {
                id: Number
            }
        },
        credits: {
            cast: [
                {
                    name: String,
                    popularity: Number
                }
            ]
        },
        keywords: {
            keywords: Array
        }
    })
);