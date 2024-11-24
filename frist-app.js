// console.log('Hello  from Node.js');
const fs = require('fs');
// what i am basically doing here is writing the message into the file 
fs.writeFileSync('hello.txt', 'Hello from Node Js')