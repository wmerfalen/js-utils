const lib = require('./lib')

if(typeof lib.prune !== 'undefined'){
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
    console.log('Pruning 1.user.name: ',lib.prune(obj,'1.user.name'))

    let weird_data = {
        "of course you did, heh.3-_ ": [
           {
               "-1": {
                   id: 2,
                   "name ": 'john doe',
               },
               "-2": {
                   id: 3,
                   "name ": 'jane doe',
               }
           }
        ]
    }
    const first = "of course you did, heh.3-_ "
    const schema = [first,0,'-2','name ']
    console.log('More complicated prune call on an object with weird keys. data set: ',{weird_data})
    let weird_pruned = lib.prune(weird_data,schema)
    weird_pruned = weird_pruned[first][0]
    console.log('Attempting to remove jane doe:', weird_pruned)

    {
        const {prune} = lib.prune
        const first = "-1-_ yes, @#!_this is a valid key\"\"'"
        const second = '_9-1 j#'
        const weird_object = {
            "-1-_ yes, @#!_this is a valid key\"\"'": [
                {
                    'z -1 +4': {
                        id: 1,
                        name: 'john doe'
                    },
                    '_9-1 j#': {
                        id: 2,
                        name: 'jane doe',
                    },
                }
            ]
        }
        /**
         * Notice how we are passing in an array as opposed to a string for the 
         * second parameter here.
         */
        let pruned = lib.prune(weird_object,[first,0,second,'name'])
        console.log('removed the name of the object with id 2: ',pruned[first][0])
    }
}

if(typeof lib.random_hex !== 'undefined'){
    console.log(`random hex string of 16 chars: ${lib.random_hex(16)}`)
}

if(typeof lib.seq !== 'undefined'){
    console.log("Testing lib.seq")
    console.log('This should be 1 through 10:',lib.seq(1,10))
}
if(typeof lib.shuffle !== 'undefined'){
    /** shuffling an array */
    let shuffle = lib.shuffle
    let data = [1,2,3,4,5,6,7,8,9,10]
    console.log('shuffle array elements from: ',data)
    console.log('results in:', shuffle(data))
}
if(typeof lib.xtract !== 'undefined'){
    /** Grab an element out of a deeply nested structure */
    let xtract = lib.xtract
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
    
    const first = "-1-_ yes, @#!_this is a valid key\"\"'"
    const second = '_9-1 j#'
    const weird_object = {
        "-1-_ yes, @#!_this is a valid key\"\"'": [
            {
                'z -1 +4': {
                    id: 1,
                    name: 'john doe'
                },
                '_9-1 j#': {
                    id: 2,
                    name: 'jane doe',
                },
            }
        ]
    }
    console.log(`Using xtract with a weird schema and an array as the second parameter`,weird_object,weird_object[first][0])
    let jane_doe = lib.xtract(weird_object,[first,0,second,'name'])
    console.log(`Extracting jane doe: `,jane_doe)
}

if(typeof lib.pluck_random !== 'undefined'){
    /** Grabbing a random array element */
    let pluck_random = lib.pluck_random
    let data = [1,2,3,4,5,6,7,8,9,10]
    console.log('random array element from: ',data, ' is: ', pluck_random(data))
}

if(typeof lib.seq !== 'undefined'){
    const seq = lib.seq

    /**
     * The next line creates: [1,2,3,4,5,6,7]
     */
    const data_set = seq(1,7)
    console.log({data_set})
}

if(typeof lib.pluck_random !== 'undefined' && typeof lib.random_array !== 'undefined'){
    const utils = require('../index')

    const pluck_random = lib.pluck_random
    const random_array = lib.random_array

    let day = 0
    let days = Array.from(Array(31)).map(_ => ++day)

    console.log({days}, 'randomly selected: ',pluck_random(days))

    const min = 1
    const max = 20
    const length = 50
    let array = random_array(min,max,length)
    console.log({array}, 'randomly selected: ',pluck_random(array))
}
