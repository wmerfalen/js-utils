/**
 * Stips ALL html from a string
 * @param {string} text the string to strip
 * @return {string} the string without html
 */
const {strip_html} = require('./fragments/strip-html')
module.exports = {
    strip_html,
}
