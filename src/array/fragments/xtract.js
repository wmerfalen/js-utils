module.exports.xtract = (obj,schema) => {
	 if(schema === null){
		 return null
	 }
	let matches = schema.match(/\^([0-9]+)$/)
	if(matches){
		const index = matches[1]
		if(Array.isArray(obj) && obj.length > index){
			return obj[index]
		}
		return null
	}
	const parts = schema.split('.')
	let level = obj
	for(let i=0; i < parts.length;i++){
		let key = parts[i]
		if(Array.isArray(level)){
			let index = parseInt(key)
			if(index === -1){
				return null
			}
			if(index < level.length){
				level = level[index]
				continue
			}
		}else if(typeof level === 'object' && level !== null){
			if(typeof level[key] === 'undefined'){
				return null
			}
			level = level[key]
			continue
		}
	}
	return level
}
