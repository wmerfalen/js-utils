const rand_between = (start,end) =>
    Math.floor(
        (Math.random() * end) + start
    )
const shuffle_for = (array,rounds) => {
    let shuffled = array
    for(let round=0; round < rounds; round++){
        for(let i=0; i < array.length; i++){
            let index = rand_between(0,shuffled.length)
            let temp = shuffled[index]
            shuffled[index] = shuffled[i]
            shuffled[i] = temp
        }
    }
    return shuffled
}
const shuffle = (array) => shuffle_for(array,1)

module.exports = {
    shuffle: shuffle,
    shuffle_for: shuffle_for,
}
