module.exports = mongoose.model(
    'media',
    new mongoose.Schema({
        details: {
            title: String
        }
    })
);