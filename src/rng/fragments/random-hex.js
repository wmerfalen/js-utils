module.exports.random_hex = (length) =>
    Array.from(Array(length)).map(
        _ => Number(Math.floor((Math.random()*15)+1)).toString(16)
    ).join('')
