const fs = require('fs');
const path = require('path');

let readFile = (...args)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,(err,data)=>{
            if(err){
                reject(err);
            }
            resolve(data);
        })
    })
}

readFile(path.join(__dirname,'data/a.txt'),'utf-8')
    .then((data)=>{
        console.log(data.toString());
        return readFile(path.join(__dirname,'data/B.txt'),'utf-8')
    }).then((data)=>{
        console.log(data.toString());
        return readFile(path.join(__dirname,'data/C.txt'),'utf-8');
    }).then((data)=>{
        console.log(data.toString());
    })
