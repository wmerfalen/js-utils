{
    /** shuffling an array */
    let {shuffle} = require('../index').rand
    let data = [1,2,3,4,5,6,7,8,9,10]
    console.log('shuffle array elements from: ',data)
    console.log('results in:', shuffle(data))
}
{
    /** Grab an element out of a deeply nested structure */
    let {xtract} = require('../index').array
    let obj = [
        {
            user: {
                id: 1,
                name: "Larry Kenobi",
            }
        },
        {
            user: {
                id: 2,
                name: "Jerry Kenobi",
            }
        },
        {
            user: {
                id: 3,
                name: "John Kenobi",
            }
        }
    ]

    let larry_schema = '0.user.name'
    let john_schema = '2.user.name'
    console.log('Example dataset: ',obj)
    console.log(`${larry_schema}: ${xtract(obj,larry_schema)}`)
    console.log(`${john_schema}: ${xtract(obj,john_schema)}`)

}
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
