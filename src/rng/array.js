
/**
 * Returns a randomly generated array of length size. Each element is between start and end
 * @param {number} start minimum value
 * @param {number} end maximum value
 * @param {number} length size of the array
 * @return {array} array of elements of size length containing integers between start and end
 */
const random_array = require('./fragments/random-array')

/**
 * Shuffles an array, with an optional rounds parameter.
 * @param {array} array the array to shuffle
 * @param {number} rounds. The number of rounds to take.
 * @return {array} the shuffled array
 */
const shuffle_for = require('./fragments/shuffle').shuffle_for

/**
 * Shuffles an array, with an optional rounds parameter.
 * @param {array} array the array to shuffle
 * @return {array} the shuffled array
 */
const shuffle = require('./fragments/shuffle').shuffle

/**
 * Grabs a random element from the passed in array
 * @param {array} array the array to sample
 * @return {mixed} a randomly chosen element in array
 */
const pluck_random = require('./fragments/pluck-random')

module.exports = {
    random_array: random_array,
    pluck_random: pluck_random,
    shuffle: shuffle,
    shuffle_for: shuffle_for,
}
