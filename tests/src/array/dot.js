const { xtract, prune } = require('../../../index').array

const assert = require('assert')
const nested = {
    products: [
        {
            id: 1,
            name: 'apple',
        },
        {
            id: 2,
            name: 'carrot',
        },
        {
            id: 3,
            name: 'banana',
        }
    ]
}
describe('Xtract',  () => {
    describe('xtracing existing items', () => {
        it('should return the element in a deeply nested object', () => {
            let list = nested
            assert.equal(xtract(list,'products.1.name'),'carrot')
        })
    })
})
describe('prune',  () => {
    describe('pruning existing items', () => {
        it('should delete an item in a deeply nested object', () => {
            let list = nested
            let pruned = prune(list,'products.1.name')
            assert.equal(typeof pruned.products[1].name,'undefined')
        })
    })
})
