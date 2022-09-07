const Media = require('../schemas/Media');

module.exports = (req, res) => {
	Media.find({ 'details.title': {$regex: req.query.title, $options: 'i'}}, (err, docs) => {
		if (err) {
			console.log(err);
			res.json({'error': err});
		}
		else {
			res.json(docs.map((media) => {
				return {'title': media.details.title};
			}))
		}
	}).limit(req.query.limit ? req.query.limit : 5);
}