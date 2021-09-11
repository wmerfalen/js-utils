/**
 * PLEASE NOTE!
 * This file is named generators because it generates content. It does __NOT__ mean
 * we are using yield!
 */

/**
 * Returns a sequential array of values with the first element of start with the last element of end
 * @param {number} start minimum value
 * @param {number} end maximum value
 * @return {array} array of elements with first element equal to start and last element equal to end
 */
const seq = (start,end) =>
    Array.from(Array(end)).map(
        _ => start++
    )

module.exports = {
    seq: seq,
}
