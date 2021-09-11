module.exports.shuffle_for = (array,rounds) => {
    let shuffled = array
    for(let round=0; round < rounds; round++){
        for(let i=0; i < array.length; i++){
            let index = Math.floor(Math.random()*shuffled.length)
            let temp = shuffled[index]
            shuffled[index] = shuffled[i]
            shuffled[i] = temp
        }
    }
    return shuffled
}
