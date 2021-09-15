'use strict'
async function run_minify() {
    const { exec } = require('child_process')
    await exec('npm run minify-export', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`)
            return
        }
        if (stderr.length) {
            console.error(`ISSUE running npm run minify-export!: ${stderr}`)
        }
    })
}
async function main() {
    const fs = require('fs')
    const { argv } = require('process')
    const xtract = require('./index').array.xtract
    const prune = require('./index').array.prune
    const path = require('path')

    const START_AT = 2
    const library = require('./index')
    const manifest = require('./manifest')
    let options = {
        except: false,
        minified: false,
        all: false,
    }
    for (let argc = 1; argc < argv.length; argc++) {
        if (['--except', '-v'].indexOf(argv[argc]) > -1) {
            options.except = true
            continue
        }
        if (['--minified', '-m'].indexOf(argv[argc]) > -1) {
            options.minified = true
            continue
        }
        if (['--all', '-a'].indexOf(argv[argc]) > -1) {
            options.all = true
            continue
        }
    }

    if (options.all) {
        let script = []
        for (let category in manifest) {
            for (let func_name in manifest[category]) {
                let file = path.join(__dirname, manifest[category][func_name])
                script.push(fs.readFileSync(file).toString())
            }
        }
        fs.writeFileSync('./dist/lib.js', script.join("\n"))
        console.log('Un-minified file has been written to ./dist/lib.js')
        if (options.minified) {
            await run_minify()
            console.log('*Minified* file has been written to ./dist/lib.min.js')
        }
        return
    }

    let fragments = argv.slice(START_AT)
    if (fragments.length == 0) {
        console.error("Please specify a function you would like to pluck")
        console.log('The available functions are available. Use dot-notation to grab each one.')
        console.log('For example: to export shuffle_for, you would specify: "npm run pluck rand.shuffle_for"')
        console.log(library)
        console.error("Exiting...")
        return
    }
    let script = []
    if (options.except) {
        let keep = library
        for (let fragment of fragments) {
            if (fragment.match(/^\-\-/)) {
                continue
            }
            keep = prune(keep, fragment)
        }
        console.log(`Here's what we'll be keeping:`, { keep })
        for (let category in keep) {
            for (let func_name in keep[category]) {
                let file = path.join(__dirname, manifest[category][func_name])
                script.push(fs.readFileSync(file).toString())
            }
        }
    } else {
        let keys = new Set()
        for (let fragment of fragments) {
            if (fragment.match(/^\-\-/)) {
                /** it's a CLI flag. skip it */
                continue
            }
            if (keys.has(fragment)) {
                console.info(`Fragment has already been specified ("${fragment}"). Skipping...`)
                continue
            }
            keys.add(fragment)
            let file = path.join(__dirname, xtract(manifest, fragment))
            script.push(fs.readFileSync(file).toString())
        }
    }
    fs.writeFileSync('./dist/lib.js', script.join("\n"))
    console.log('Un-minified file has been written to ./dist/lib.js')
    if (options.minified) {
        await run_minify()
        console.log('*Minified* file has been written to ./dist/lib.min.js')
    }
}
main()
