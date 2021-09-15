const fs = require('fs')
const {argv,exec} = require('process')
const xtract = require('./index').array.xtract
const prune = require('./index').array.prune
const path = require('path')
console.log(argv)

const START_AT = 2
const library = require('./index')
const manifest = require('./manifest')
let options = {
    except: false,
    minified: false,
    all: false,
}
console.log(argv)
for(let argc=1; argc < argv.length; argc++){
    if(['--except','-v'].indexOf(argv[argc]) > -1){
        options.except = true
        continue
    }
    if(['--minified','-m'].indexOf(argv[argc]) > -1){
        options.minified = true
        continue
    }
    if(['--all','-a'].indexOf(argv[argc]) > -1){
        options.all = true
        continue
    }
}

if(options.all){
    let script = []
    for(let category in manifest){
        for(let func_name in manifest[category]){
            let file = path.join(__dirname,manifest[category][func_name])
            if(options.minified){
                file = file.replace(/\.js$/,'.min.js')
            }
            script.push(fs.readFileSync(file).toString())
        }
    }
    fs.writeFileSync('lib.js',script.join("\n"))
    console.log('Files exported to lib.js')
    return
}

let fragments = argv.slice(START_AT)
if(fragments.length == 0){
    console.error("Please specify a function you would like to pluck")
    console.log('The available functions are available. Use dot-notation to grab each one.')
    console.log('For example: to export shuffle_for, you would specify: "npm run pluck rand.shuffle_for"')
    console.log(library)
    console.error("Exiting...")
    return
}
let script = []
if(options.except){
    let keep = library
    for(let fragment of fragments){
        if(fragment.match(/^\-\-/)){
            continue
        }
        keep = prune(keep,fragment)
    }
    for(let category in keep){
        for(let func_name in keep[category]){
            console.log({category,func_name,manifest})
            let file = path.join(__dirname,manifest[category][func_name])
            if(options.minified){
                file = file.replace(/\.js$/,'.min.js')
            }
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
        if(options.minified){
            file = file.replace(/\.js$/,'.min.js')
        }
        script.push(fs.readFileSync(file).toString())
    }
}
fs.writeFileSync('lib.js',script.join("\n"))
console.log('Files exported to lib.js')
