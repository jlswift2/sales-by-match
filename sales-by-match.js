'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

    // Psudocode in the preliminary planning phase
    // for i in array
    //     // empty.i = !empty.i ?? false
    //     // empty.i === true ? total++
    //     // empty.i ? empty.i = false : empty.i = true
    //     if empty.i exists 
    //         total ++ 
    //         empty.i.destory
    //     if not, empty.i = 1
    
    //Discovery/Reminder: use [] instead of dots. [] indicate a modular value rather than a static one

function sockMerchant(n, ar) {
    let test = {}
    let total = 0
    
    for (const el of ar) {
        // A long-form version of my answer below
        // test[el] ? test[el] = !test[el] : test[el] = false
        // if (test.el === undefined) {
        //     test.el = false
        // } else if (test.el === false) {
        //     test.el = true
        //     total++
        // } else {
        //     test.el = false
        // }
        
        if (test[el] === undefined) {
            test[el] = false
        } else {
            test[el] = !test[el]
        }
        test[el] === true ? total++ : null
    }
    return(total)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}