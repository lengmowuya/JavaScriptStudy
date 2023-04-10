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

// 使用场景:统计字符出现次数
// 阿布教学的使用方式.
const hash = 'ajorawjfoa'.split('').reduce((obj,cur)=>{
    obj[cur] = obj[cur] ? obj[cur]+1 : 1;
    return obj;
},{});
console.log(hash);  // { a: 3, j: 2, o: 2, r: 1, w: 1, f: 1 }
// 阿布抽象出reduce的一般使用逻辑,reduce就是在遍历过程执行状态叠加,遍历的每一个元素都要给某一个已有的值叠加一次状态的场景就适合用reduce.
// 而寻找最大值过程中的比大小,其实也会把结果对已有结果进行覆盖.只是和一般情况下的reduce修改,是叠加.
// 重点:所以reduce适用的场景思路是需要对已有值不断进行叠加的场景.

// reduce方法骚操作合集博客
//https://blog.csdn.net/cmdfas/article/details/120442016 