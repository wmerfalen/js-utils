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
