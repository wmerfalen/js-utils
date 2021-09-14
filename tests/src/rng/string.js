const { random_hex } = require('../../../index').rand
const assert = require('assert')

describe('random_hex', () => {
    it('should return a random string with only hex chars', () => {
        let size = 25
        let created = random_hex(size)
        assert.equal(created.length, size)
        for (let i = 0; i < size; i++) {
            assert.equal(
                [
                    'a', 'b', 'c', 'd', 'e', 'f',
                    '0', '1', '2', '3', '4', '5',
                    '6', '7', '8', '9'
                ].indexOf(created[i]) !== -1, true)
        }
    })
})
