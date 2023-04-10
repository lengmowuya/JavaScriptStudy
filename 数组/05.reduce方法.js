// reduce方法是数组迭代方法里的回调函数里接收参数最多的方法.
// 四个参数:previousValue,currentValue,index,array.其中index和array是可选的.
// reduce方法会返回一个值,该值是每次迭代返回结果的合并.如果对一个数组中的所有元素求和会很有用.
let arr = [1,2,3,4,5,6,7,8,9];


// 使用场景:数组求和,求积
// 返回整数,他会每次用旧返回值整数 + 新返回值整数
let result2 = arr.reduce((preVal,curVal)=>{
    return preVal + curVal;
    // preVal是上次迭代的返回值
})
console.log(result2);   // 45



// 使用场景:寻找最大元素,寻找最小元素,等寻找某个属性最大的元素.
// 会记录上一次的返回值,其实就是相当于每次都可以选择一个留存值并参与下一次运行,逻辑非常契合比大小.
let result3 = [45,1,5,73,42,131,53,12].reduce((preVal,curVal)=> preVal>curVal?preVal:curVal);
console.log(result3);   // 131



// 使用场景:反转字符串
let string = [...'Hello,World!'].reduce((a,b) => b+a);
console.log(string);    // !dlroW,olleH


// 使用场景:数组扁平化
// 当然也可以用ES6的.flat方法替代
let flatArray = [[1,2,3],[4,5,6],[7,8,9]].reduce((singleArray,nextArray) => singleArray.concat(nextArray));
console.log(flatArray);     // [1, 2, 3, 4, 5,6, 7, 8, 9]


// reduce方法骚操作合集博客
//https://blog.csdn.net/cmdfas/article/details/120442016 