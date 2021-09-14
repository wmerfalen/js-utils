const { strip_html } = require('../../../index').html
const assert = require('assert')

describe('strip_html', () => {
    it('should eliminate tags in a string', () => {
        const normal_text ="heh, this is some text"
        const problematic = `<script>alert("test");</script>${normal_text}`
        let result = strip_html(problematic)
        assert.equal(result,`alert("test");${normal_text}`)
    })
})
