const { random_array, shuffle_for, shuffle, pluck_random } = require('../../../index').rand
const assert = require('assert')

describe('random array', () => {
    it('should return a random array of a specific size with elements between 1 and 10', () => {
        let start = 1,
            end = 10,
            size = 25
        let created = random_array(start, end, size)
        assert.equal(created.length, size)
        for (let i = 0; i < size; i++) {
            assert.equal(created[i] >= start, true)
            assert.equal(created[i] <= end, true)
        }
    })
})
describe('shuffle_for and shuffle', () => {
    it('should shuffle elements in an array and all elements should be accounted for', () => {
        const data_set = [
            1,2,3,4,5,6,7,8,9,10
        ]
        let found = {}
        let shuffled = shuffle_for(data_set,10)
        assert.equal(shuffled.length, data_set.length)

        for (let i = 0; i < shuffled.length; i++) {
            found[shuffled[i]] = true
        }
        for(let i=1; i <= 10; i++){
            assert.equal(found[i],true)
        }

        found = {}
        shuffled = shuffle(data_set)
        assert.equal(shuffled.length, data_set.length)

        for (let i = 0; i < shuffled.length; i++) {
            found[shuffled[i]] = true
        }
        for(let i=1; i <= 10; i++){
            assert.equal(found[i],true)
        }
    })
})

describe('pluck_random', () => {
    it('should should return a random element from an array', () => {
        const data = [1,2,3,4,5,6,7,8,9,10]
        assert.equal(data.indexOf(pluck_random(data)) !== -1,true)
    })
})
