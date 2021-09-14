const { seq } = require('../../../index').array
const assert = require('assert')

describe('seq',  _ => {
    describe('generates 1 through 10', _ => {
        it('should return ten items. 1 through 10', (done) => {
            let list = seq(1,10)
            assert.equal(list[0],1)
            assert.equal(list[9],10)
            done()
        })
    })
})
