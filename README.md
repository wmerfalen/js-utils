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

# API

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

## Generate an array of sequential numbers
```
const {seq} = require('@mentoc/utils').array

/**
 * The next line creates: [1,2,3,4,5,6,7]
 */
const data_set = seq(1,7)
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

## Use dot notation to grab an element out of a deeply nested structure
```
const xtract = require('@mentoc/utils').array.xt
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

console.log(${xtract(obj,larry_schema)})    // prints "Larry Kenobi"
console.log(${xtract(obj,john_schema)})     // prints "John Kenobi"

```
