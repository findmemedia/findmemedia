const Media = require('../models/Media');

module.exports = (req, res) => {
    if (!req.query.input) return res.json([]);
    let limit = req.query.limit ? parseInt(req.query.limit) : 5;
    if (limit > 15) limit = 15;
    Media.find({ 'title': { '$regex': req.query.input } }, (_err, similar) => {
        res.json(similar);
    }).limit(limit);
}