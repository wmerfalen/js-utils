/**
 * Uses dot notation to grab an element from a deeply nested structure
 * @param {object} data the object to crawl through
 * @param {string} schema the string used to fetch info from data
 * @return {mixed} this function will try to return the element according to the schema. if it doesn't exist, it will return null. this also means that if the element does exist and is null that there is no way to tell. Please use this only when you know the schema is exactly as you expect.
 */
const {xtract} = require('./fragments/xtract')
module.exports = {
    xtract,
}
