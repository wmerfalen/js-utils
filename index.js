const array_rand = require('./src/rng/array')
const array_generators = require('./src/array/generators')
const xtract = require('@mentoc/xtract')

let array = {}
let keys = new Set()
for(let collection of [array_generators,xtract]){
    for(let key in collection){
        if(keys.has(key)){
            throw `Error! Namespace is polluted with duplicate entires for: "${key}" in array collection`
        }
        array[key] = collection[key]
        keys.add(key)
    }
}



module.exports = {
    rand: array_rand,
    array,
}
