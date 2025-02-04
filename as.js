import fs from 'fs'

const file = fs.readFileSync("002.jpeg");

console.log(file.toString('base64'))