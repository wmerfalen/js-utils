/**
 * Uses dot notation to grab an element from a deeply nested structure
 * @param {object} data the object to crawl through
 * @param {string} schema the string used to fetch info from data. This can also be an array for weird object keys that cannot be expressed using dot notation. for an example, see the README.md
 * @return {mixed} this function will try to return the element according to the schema. if it doesn't exist, it will return null. this also means that if the element does exist and is null that there is no way to tell. Please use this only when you know the schema is exactly as you expect.
 */
const {xtract} = require('./fragments/xtract')
/**
 * Uses dot notation to delete an element from a deeply nested structure
 * @param {object} data the object to crawl through
 * @param {string} schema the string used to fetch info from data. This can also be an array for weird object keys that cannot be expressed using dot notation. for an example, see the README.md
 * @return {mixed} This function will return the modified data containing the removed key (if it was successfully found)
 */
const {prune} = require('./fragments/prune')
module.exports = {
    xtract,
    prune,
}
