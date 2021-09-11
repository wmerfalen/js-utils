
/**
 * Returns a randomly generated array of length size. Each element is between start and end
 * @param {number} start minimum value
 * @param {number} end maximum value
 * @param {number} length size of the array
 * @return {array} array of elements of size length containing integers between start and end
 */
const random_array = (start,end,length) =>
    Array.from(Array(length)).map(
        _ => Math.floor((Math.random()*end)+start)
    )

const rand_between = (start,end) =>
    Math.floor(
        (Math.random() * end) + start
    )

/**
 * Grabs a random element from the passed in array
 * @param {array} array the array to sample
 * @return {mixed} a randomly chosen element in array
 */
const pluck_random = (array) => array[rand_between(0,array.length)]

module.exports = {
    random_array: random_array,
    pluck_random: pluck_random,
}
