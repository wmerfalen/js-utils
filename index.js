const array_rand = require('./src/rng/array')
const array_generators = require('./src/array/generators')
const array_dot = require('./src/array/dot')
const string_rand = require('./src/rng/string')

let array = {}
let keys = new Set()
for(let collection of [array_generators,array_dot]){
    for(let key in collection){
        if(keys.has(key)){
            throw `Error! Namespace is polluted with duplicate entires for: "${key}" in array collection`
        }
        array[key] = collection[key]
        keys.add(key)
    }
}

let rand = {}
keys = new Set()
for(let collection of [array_rand,string_rand]){
    for(let key in collection){
        if(keys.has(key)){
            throw `Error! Namespace is polluted with duplicate entires for: "${key}" in array collection`
        }
        rand[key] = collection[key]
        keys.add(key)
    }
}

module.exports = {
    rand,
    array,
}
