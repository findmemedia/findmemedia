const Media = require('../models/Media');

module.exports = (req, res) => {
    if (!req.query.input) return res.json([]);
    let limit = parseInt(req.query.limit);
    if (!limit) limit = 5;
    if (limit > 15) limit = 15;
    Media.find({ 'title': { '$regex': req.query.input, '$options': 'i' } }, (_err, similar) => {
        res.json(similar);
    }).limit(limit);
}