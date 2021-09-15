#!/bin/bash
npm install --save-dev babel-minify

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
MINIFY="${SCRIPT_DIR}/../node_modules/babel-minify/bin/minify.js"

for dir in ${SCRIPT_DIR}/../src/*/fragments ; do
    cd $dir
    for js_file in $(ls *.js | grep -v 'min.js'); do
        OUTPUT_FILE=$(echo ${dir}/$js_file | sed -e 's|.js$|.min.js|')
        $MINIFY $js_file -o $OUTPUT_FILE
    done
done
