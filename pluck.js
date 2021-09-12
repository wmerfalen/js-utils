const fs = require('fs')
const {argv} = require('process')
const xtract = require('./index').array.xtract
const prune = require('./index').array.prune
const path = require('path')

const START_AT = 2
let fragments = argv.splice(START_AT)
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

let invert_choice = fragments[0] === '--except'
let script = []
if(invert_choice){
    let keep = library
    fragments = fragments.splice(1)
    for(let fragment of fragments){
        keep = prune(keep,fragment)
    }
    for(let category in keep){
        for(let func_name in keep[category]){
            console.log({category,func_name,manifest})
            let file = path.join(__dirname,manifest[category][func_name])
            script.push(fs.readFileSync(file).toString())
        }
    }
}else{
    let keys = new Set()
    for(let fragment of fragments){
        if(fragment.match(/^\-\-/)){    /** it's a CLI flag. skip it */
            continue
        }
        if(keys.has(fragment)){
            console.info(`Fragment has already been specified ("${fragment}"). Skipping...`)
            continue
        }
        keys.add(fragment)
        let file = path.join(__dirname,xtract(manifest,fragment))
        script.push(fs.readFileSync(file).toString())
    }
}
fs.writeFileSync('lib.js',script.join("\n"))
console.log('Files exported to lib.js')
