const fs = require('fs')
const path = require('path')

// 改造后的readFile方法
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

Promise.all([
    readFile(path.join(__dirname,'data/A.txt'),'utf-8'),
    readFile(path.join(__dirname,'data/B.txt'),'utf-8'),
    readFile(path.join(__dirname,'data/C.txt'),'utf-8'),
]).then(([data1,data2,data3])=>{
    console.log(data1,data2,data3);
}).catch((err)=>{
    console.log(err);
});