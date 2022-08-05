module.exports = class Query {
    constructor() {
        this.$or = [];
    }

    add(obj) {
        this.$or.push(obj);
    }
}