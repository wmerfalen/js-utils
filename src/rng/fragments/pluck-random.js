const rand_between = require('../rand-between')
module.exports = (array) => array[rand_between(0,array.length)]
