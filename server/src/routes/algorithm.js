const PriorityQueue = require('fastpriorityqueue');
const Media = require('../schemas/Media');
const Query = require('../models/Query');

const calculatePriority = (media, baseline) => {
    let priority = 0;
    baseline['credits']['cast'].forEach(actor => {
        if (media['credits']['cast'].some(otherActor => otherActor['name'] === actor['name'])) {
            priority += actor['popularity'];
        }
    });
    return priority;
}

module.exports = (req, res) => {
    Media.findOne({ 'details.title': req.query.title }, (_err, baseline) => {
        if (_err) res.send(_err);
        else if (!baseline) res.send(`No media by name ${req.query.title}`);
        else {
            // Build Query
            const query = new Query();
            if (baseline['keywords']['keywords'].length > 5) baseline['keywords']['keywords'].length = 5;
            query.add({
                '$and': [
                    { 'details.genres': { '$all': baseline['details']['genres'] } },
                    { 'keywords.keywords': { '$in': baseline['keywords']['keywords'] } }
                ]
            });
            if (baseline['credits']['cast'].length > 7) baseline['credits']['cast'].length = 7;
            const castNames = baseline['credits']['cast'].map(actor => actor.name);
            query.add({ 'credits.cast.name': { '$in': castNames } });
            if (baseline['details']['belongs_to_collection']) {
                query.add({ 'details.belongs_to_collection.id': baseline['details']['belongs_to_collection']['id'] });
            }
            // Query Database
            Media.find(query, (_err, list) => {
                const queue = new PriorityQueue((a, b) => a.priority > b.priority);
                // Calculate priority
                list.forEach(media => {
                    media['priority'] = calculatePriority(media, baseline);
                    queue.add(media);
                });
                jsonQueue = [];
                queue.forEach(media => {
                    if (media['details']['title'] != baseline['details']['title']) {
                        item = {
                            title: media['details']['title'],
                            poster: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + media['details']['poster_path']
                        };
                        jsonQueue.push(item);
                    }
                });
                res.json(jsonQueue);
            });
        }
    });
}