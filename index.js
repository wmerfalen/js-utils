const array_collection = [
    require('./src/array/generators'),
    require('./src/array/dot'),
]
const rand_collection = [
    require('./src/rng/array'),
    require('./src/rng/string'),
]

let array = {}
let keys = new Set()
for(let collection of array_collection){
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
for(let collection of rand_collection){
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
