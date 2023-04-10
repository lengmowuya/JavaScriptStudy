// map是会返回新数组的一个方法,他返回的数组元素是每次迭代的返回结果.
const arr = [1,2,3,4,5,6,7,8,9];
let map = arr.map(num=>num%2 ===0);
console.log(map);
// map的译文就是映射,意图就是为了让返回的数组成为原数组某个属性的一对一映射.而这里映射的是元素是否为奇偶数.
    /* [
        false, true,  false,
        true,  false, true,
        false, true,  false
    ] */


// 注意点:返回值不一定为布尔值,map也不是只能存储布尔值.
// 他还可以成为某种运算的结果.
let arr2 = arr.map(num=>num-2);
console.log(arr2);
    /* [
        -1, 0, 1, 2, 3,
        4, 5, 6, 7
    ] */


// 从阿布那里学来的很骚的操作,让字符串类型的数组直接全部迭代成整数类型的数组
let result = ['1','3','6'].map(Number);
console.log(result);    // [ 1, 3, 6 ]


// 注意点,可以使用Number回调,但是不能使用parseInt回调.因为回调函数其实默认传参3个:item,index,array.
// 而parseInt拥有两个参数,第二个参数为数字进制.
// 所以如果使用parseInt,结果就会变成 [ 1, NaN, NaN ]