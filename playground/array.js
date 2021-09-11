{
    /** Grabbing a random array element */
    let {pluck_random} = require('../index').rand
    let data = [1,2,3,4,5,6,7,8,9,10]
    console.log('random array element from: ',data, ' is: ', pluck_random(data))
}

{
const {seq} = require('../index').array

/**
 * The next line creates: [1,2,3,4,5,6,7]
 */
const data_set = seq(1,7)
    console.log({data_set})
    return
}

{
const utils = require('../index')

const pluck_random = utils.rand.pluck_random
const random_array = utils.rand.random_array

let day = 0
let days = Array.from(Array(31)).map(_ => ++day)

console.log({days}, 'randomly selected: ',pluck_random(days))

const min = 1
const max = 20
const length = 50
let array = random_array(min,max,length)
console.log({array}, 'randomly selected: ',pluck_random(array))


let sequential = utils.array.seq(min,max)
console.log({sequential}, `between ${min} and ${max}`)
}
