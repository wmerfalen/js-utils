const collections = {
    array: [
        require('./src/array/generators'),
        require('./src/array/dot'),
    ],
    rand: [
        require('./src/rng/array'),
        require('./src/rng/string'),
    ],
    html: [
        require('./src/html/manager'),
    ],
}

let lib = {}
for(let category in collections){
    if(typeof lib[category] === 'undefined'){
        lib[category] = {}
    }
    for(let function_mapping of collections[category]){
        for(let function_name in function_mapping){
            lib[category][function_name] = function_mapping[function_name]
        }
    }
}
module.exports = lib
