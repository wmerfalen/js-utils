const { rand_between } = require('../../../index').rand
const assert = require('assert')

describe('rand_between', () => {
    it('should return a random integer between 1 and 100 for 1k calls', () => {
        let start = 1,
            end = 100
        for (let i = 0; i < 1000; i++) {
            let created = rand_between(start,end)
            assert.equal(created >= start, true)
            assert.equal(created <= end, true)
        }
    })
})
