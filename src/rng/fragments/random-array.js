module.exports = (start,end,length) =>
    Array.from(Array(length)).map(
        _ => Math.floor((Math.random()*end)+start)
    )
