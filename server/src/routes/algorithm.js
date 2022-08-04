const Media = require('../schemas/Media');
const Query = require('../models/Query');

module.exports = (req, res) => {
    const query = new Query();
    query.add({ 'details.runtime': 131 });
    Media.findOne(query, (_err, media) => {
        if (_err) res.send(_err);
        else {
            res.json(media);
        }
    });
}