const PriorityQueue = require('fastpriorityqueue');
const Media = require('../models/Media');
const Query = require('../models/Query');

const buildQuery = (item, attr, query, isList) => query.$and[0].$or.push({
    [attr]: {
        '$all': isList ? item : [item]
    }
});

const calculatePriority = (l1, l2, weight) => {
    let shift = 0;
    let curve = 1;
    l1.forEach((item, index) => {
        if (l2.includes(item)) {
            shift += Math.pow(weight / (index + 1), curve);
            curve += 0.5;
        }
    });
    return shift;
}

module.exports = (req, res) => {
    Media.findOne({ 'title': req.query.title }, (_err, baselineMedia) => {
        if (!baselineMedia) return res.json({ '_err': `No media found by title ${req.query.title}` });
        const query = new Query(baselineMedia.title);
        baselineMedia.director.forEach(item => buildQuery(item, 'director', query));
        baselineMedia.cast.forEach(item => buildQuery(item, 'cast', query));
        buildQuery(baselineMedia.listed_in, 'listed_in', query, true);
        Media.find(query, (_err, mediaList) => {
            const queue = new PriorityQueue((a, b) => a.priority > b.priority);
            mediaList.forEach(media => {
                media.priority = (
                    calculatePriority(baselineMedia.cast, media.cast, 230)
                    + calculatePriority(baselineMedia.director, media.director, 270)
                    + calculatePriority(baselineMedia.director, media.director, 220)
                );
                queue.add(media);
            });
            jsonQueue = [];
            queue.forEach(item => jsonQueue.push(item));
            res.json(jsonQueue);
        });
    });
}