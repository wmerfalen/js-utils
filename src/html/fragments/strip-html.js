module.exports.strip_html = (input) => {
    if(input === null || typeof input === 'undefined'){
        return null
    }
    let output = ''
    let found_end = false
    let chunk_start = null, chunk_end = null
    let k = 0
    for(let i=0; i < input.length;i++){
        if(input[i] === '>'){
            continue
        }
        if(input[i] === '<'){
            found_end = false
            chunk_end = chunk_start = i
            k = i
            while(!found_end && k < input.length){
                ++k
                if(input[k] === '>'){
                    found_end = true
                    chunk_end = k
                    break
                }
            }
            if(found_end){
                i = k
            }else{
                i += 1
            }
            continue
        }
        output += input[i]
    }
    return output
}
