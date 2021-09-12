module.exports.prune = (obj,schema) => {
	if(schema === null){
	    return null
	}
    let parts = null
    if(Array.isArray(schema)){
        parts = schema
    }else{
        let matches = schema.match(/\^([0-9]+)$/)
        if(matches){
            const index = matches[1]
            if(Array.isArray(obj) && obj.length > index){
                delete obj[index]
            }
            return obj
        }
        parts = schema.split('.')
    }
    let ref = obj
    let ctr = 0
    for(let key of parts){
        if(ctr + 1 === parts.length){
            delete ref[key]
            return obj
        }
        ref = ref[key]
        ++ctr
    }
	return obj
}
