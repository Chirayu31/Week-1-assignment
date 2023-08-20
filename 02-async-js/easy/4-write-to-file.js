const fs = require('fs')

fs.writeFile('input.txt', 'Write this data', (err) => {
    if (err) console.error(err);
    console.log('Done');
})