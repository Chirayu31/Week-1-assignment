const fs = require('fs')

function fileClean(err, data) {
    if (err) { console.log(err); return; }
    let toClean = data.toString();
    let flag = true;
    let cleanedData = '';

    for (let i = 0; i < toClean.length; i++) {
        let c = toClean[i]
        if (c !== ' ') {
            flag = false;
            cleanedData += c;
        } else if (!flag) {
            flag = true;
            cleanedData += c;
        }
    }
    console.log(cleanedData)

    fs.writeFile('input.txt', cleanedData, (err) => {
        if (err) console.error(err);
    })
    console.log('Done')
}

fs.readFile('input.txt', fileClean)