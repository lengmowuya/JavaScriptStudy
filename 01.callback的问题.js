const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname,'data/A.txt'),(err,data)=>{
    console.log(data.toString());
})

fs.readFile(path.join(__dirname,'data/B.txt'),(err,data)=>{
    console.log(data.toString());
})

fs.readFile(path.join(__dirname,'data/C.txt'),(err,data)=>{
    console.log(data.toString());
})

// aaa
// ccc
// bbb