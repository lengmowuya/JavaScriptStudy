// 使用concat来合并数组及元素
// 使用场景:当我们想要批量添加事件到事件列表时
let num = 1;
const arr1 = [1,2,3];
const arr2 = ['ab','cd','efg'];
const arr3 = arr2.concat(arr1,num);
console.log(arr3);
    // [
    //     'ab', 'cd', 'efg',
    //     1,    2,    3,    
    //     1
    //   ]