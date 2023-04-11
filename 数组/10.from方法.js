// Array.from方法根据原本的数组返回一个新数组
// from使用需要Array类
let arr = [1,2,3,4,5,6];
let arr2 = Array.from(arr);
console.log(arr2);  // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr === arr2);  // false


// Array.of方法根据传入的参数创建一个新数组
let arr3 = Array.of(12,342,1,true,'string');
console.log(arr3);  // [ 12, 342, 1, true, 'string' ]
// 它和下面用数组字面量方式创建的数组一样,区别是Array.of是用函数的方式.
let arr4 = [12,342,1,true,'string'];
console.log(arr4);  // [ 12, 342, 1, true, 'string' ]


// 使用场景:复制已有数组
let newArr = Array.of(...arr);
console.log(newArr,newArr === arr); // [ 1, 2, 3, 4, 5, 6 ] false


// !!!!!!!!!废弃解释!!!!!!!!!
// 为什么一些方法是在Array类上的静态方法,而一些方法是Array实例的方法呢?
/* 
    避免混淆职责与参与过程中的实际位子.
    例如复制一个数组,这个数组实例实际上只是做到了一个参数的位子.

*/