# js-utils: a useful set of functions

# Motivation
I feel like there are bits of functionality that I need to use everyday in my javascript projects. 
All the functionality I'm looking for isn't there or is inside another npm package. 
This library provides those bits of functionality. 
I am also a strong believer in *giving back to the community*.

# Installation
```
npm install @mentoc/utils
```

# Before you copy and paste!
Did you know, this library can export only the functions you need?
Let's say we only want the `random_array` and `shuffle` functions.
Easy. All we have to do is run this:
```
npm run pluck rand.random_array rand.shuffle
```
Now if you do an ls, you will notice that there is now a `lib.js` file.
If you look at the contents of lib.js, you'll notice it only contains
two exports (for both of the functions we exported). 

This command uses *dot notation*. 

If you just run `npm run pluck`, you will be greeted with this
object structure:
```
{
  rand: {
    random_array: [Function],
    pluck_random: [Function],
    shuffle: [Function],
    shuffle_for: [Function],
    random_hex: [Function]
  },
  array: { seq: [Function], xtract: [Function] }
}
```

If you want to export the `xtract` function, you would run:
```
npm run pluck array.xtract
```

## Specifying the inverse
You can use `npm run pluck-except <name>...` to pluck everything except
for a few functions.
```
npm run pluck-except rand.shuffle
```
This will extract the entire library except for `shuffle`

# RNG API (for Arrays)

## Grabbing a random array element
```
const {pluck_random} = require('@mentoc/utils').rand

const data = [1,2,3,4,5,6,7,8,9,10]

console.log(pluck_random(data))
```

## Generate an array of fixed length with random numbers between a range
```
const {random_array} = require('@mentoc/utils').rand

/**
 * Generate a random array of 20 elements.
 * Each element is between the number 1 and 100
 */
let data_set = random_array(1,100,20)

console.log(data_set)
```


## Shuffle an array
```
const {shuffle} = require('@mentoc/utils').rand

const data_set = [1,2,3,4,5,6,7,8,9,10]

console.log(shuffle(data_set))
```

## Shuffle an array by passing in more/less rounds
Maybe you want the algorithm to shuffle more than just one time. For this, you can
use the `shuffle_for` function. It accepts a number of rounds as it's second parameter.

```
const {shuffle_for} = require('@mentoc/utils').rand

const data_set = [1,2,3,4,5,6,7,8,9,10]

/**
 * This is equivalent to calling shuffle(data_set) 250 times in a loop
 */
console.log(shuffle_for(data_set,250))
```


# Dot notation API
## Use dot notation to grab an element out of a deeply nested structure
```
const {xtract} = require('@mentoc/utils').array
/** Grab an element out of a deeply nested structure */
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

console.log(xtract(obj,larry_schema))    // prints "Larry Kenobi"
console.log(xtract(obj,john_schema))     // prints "John Kenobi"

```

## Use dot notation to delete an element out of a deeply nested structure
```
const {prune} = require('@mentoc/utils').array
/** Delete an element out of a deeply nested structure */
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
console.log(prune(obj,'1.user.name'))   // removes name: "Jerry Kenobi" from object
```

# Alternate notation API
There are times when you simply cannot pass in a dot notation in order to crawl
a deeply nested structure. An object key can be *any* string value. This complicates
matters and breaks the dot notation API. That is why the following functions accept
either a `string` or an `array` as the second parameter.

## xtract using an array schema
```
const {xtract} = require('@mentoc/utils').array
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
let jane_doe = xtract(weird_object,[first,0,second,'name'])
console.log(jane_doe) // will print "jane doe"
```

## prune using an array schema
```
const {prune} = require('@mentoc/utils').array
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

// output of above console.log:
// removed the name of the object with id 2:  { 'z -1 +4': { id: 1, name: 'john doe' }, '_9-1 j#': { id: 2 } }

```

# Array generation API
## Generate an array of sequential numbers
```
const {seq} = require('@mentoc/utils').array

/**
 * The next line creates: [1,2,3,4,5,6,7]
 */
const data_set = seq(1,7)
```

# RNG API (for Strings)

## Grabbing a random string of hexadecimal characters
** PLEASE NOTE: THIS FUNCTION IS NOT CRYPTOGRAPHICALLY SECURE!!! **
** DO NOT USE THIS FUNCTION FOR PASSWORD GENERATION OR __ANYTHING__ THAT NEEDS TO BE SECURE!!! **
** YOU HAVE BEEN WARNED **
```
const {random_hex} = require('@mentoc/utils').rand

const length = 16

console.log(random_hex(16))	// Prints out 16 hex chars (without prepending zeroes)
```

# Contributors
William Merfalen

