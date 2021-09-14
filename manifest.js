const manifest = {
    rand: {
        random_array: 'src/rng/fragments/random-array.js',
        shuffle: 'src/rng/fragments/shuffle.js',
        pluck_random: 'src/rng/fragments/pluck-random.js',
        shuffle_for: 'src/rng/fragments/shuffle-for.js',
        random_hex: 'src/rng/fragments/random-hex.js',
    },
    array: {
        seq: 'src/array/fragments/seq.js',
        xtract: 'src/array/fragments/xtract.js',
        prune: 'src/array/fragments/prune.js',
    },
    html: {
        strip_html: 'src/html/fragments/strip-html.js',
    },
}

module.exports = manifest
