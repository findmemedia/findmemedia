module.exports = class Query {
    constructor() {
        this.$and = [];
    }

    add(obj) {
        this.$and.push(obj);
    }
}