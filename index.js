const array_rand = require('./src/rng/array')
const array_generators = require('./src/array/generators')

module.exports = {
    rand: {
        pluck_random: array_rand.pluck_random,
        random_array: array_rand.random_array,
    },
    array: {
        seq: array_generators.seq,
    },
}
