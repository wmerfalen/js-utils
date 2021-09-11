const fs = require('fs')
const {argv} = require('process')
const xtract = require('@mentoc/xtract').xt
const path = require('path')

const START_AT = 2
const fragments = argv.splice(START_AT)
const library = require('./index')
const manifest = require('./manifest')
if(fragments.length == 0){
    console.error("Please specify a function you would like to pluck")
    console.log('The available functions are available. Use dot-notation to grab each one.')
    console.log('For example: to export shuffle_for, you would specify: "npm run pluck rand.shuffle_for"')
    console.log(library)
    console.error("Exiting...")
    return
}


let script = []
let keys = new Set()
for(let fragment of fragments){
    if(keys.has(fragment)){
        console.info(`Fragment has already been specified ("${fragment}"). Skipping...`)
        continue
    }
    keys.add(fragment)
    let file = path.join(__dirname,xtract(manifest,fragment))
    script.push(fs.readFileSync(file).toString())
}
fs.writeFileSync('lib.js',script.join("\n"))
console.log('Files exported to lib.js')
