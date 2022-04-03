module.exports = class Query {
    constructor(mediaTitle) {
        this.$and = [
            {
                '$or': []
            },
            {
                'title': {
                    '$ne': mediaTitle
                }
            }
        ];
    }
}