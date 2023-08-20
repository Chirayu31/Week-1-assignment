const fs = require('fs')

function afterRead(err, content) {
    if (err) console.error(err)
    console.log(content.toString())
}

fs.readFile('input.txt', afterRead)

let cnt = 0;
for (let i = 1; i <= 10000000000; i++) cnt += i;
console.log(cnt)