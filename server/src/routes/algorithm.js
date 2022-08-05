const PriorityQueue = require('fastpriorityqueue');
const Media = require('../schemas/Media');
const Query = require('../models/Query');

module.exports = (req, res) => {
    Media.findOne({ 'details.title': req.query.title }, (_err, baseline) => {
        if (_err) res.send(_err);
        else if (!baseline) res.send(`No media by name ${req.query.title}`);
        else {
            const query = new Query();
            query.add({ '$and': [
                { 'details.genres': { '$all': baseline['details']['genres'] } },
                { 'keywords.keywords': { '$in': baseline['keywords']['keywords'] } }
            ]});
            // query.add({  });
            console.log(JSON.stringify(query));
            Media.find(query, (_err, list) => {
                const queue = new PriorityQueue((a, b) => a.priority > b.priority);
                list.forEach(media => {
                    media['priority'] = 1;
                    queue.add(media);
                });
                jsonQueue = [];
                queue.forEach(media => jsonQueue.push(media['details']['title']));
                res.json(jsonQueue);
            });
        }
    });
}