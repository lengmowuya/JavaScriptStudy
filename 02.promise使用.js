const fs = require('fs');
const path = require('path');

// 1.创建一个promise(一旦创建,立马执行)
new Promise((resolve,reject)=>{
    fs.readFile(path.join(__dirname,'data/A.txt'),(err,data)=>{
        if(err) reject(err);
        console.log(data.toString());
        resolve(data);
    })
    // 2.和callback主要不同是在于promise是链式的
}).then((data)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'data/B.txt'),(err,data)=>{
            if(err) reject(err);

            console.log(data.toString());
            resolve(data);
        })
    })
}).then((data)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'data/C.txt'),(err,data)=>{
            if(err) reject(err);
            console.log(data.toString());
            resolve(data);
        })
    })
}).catch((err)=>{
    console.log("读取文件失败");
});

