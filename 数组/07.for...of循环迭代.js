// for of是另一种迭代数组的方式
let arr = [1,2,3,4,5];
for(let n of arr){
    console.log(n%2===0);
}

// 与for of类似的,有迭代对象的for in
let obj = {
    name:'王五',
    sex:'male',
    age:19,
    like:'reading',
    isAdult:true
}
for(let key in obj){
    console.log(key,obj[key]);
}