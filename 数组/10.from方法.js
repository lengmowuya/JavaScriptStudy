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