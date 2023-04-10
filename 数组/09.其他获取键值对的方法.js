// ES6中还新增了三种从数组中获取键值对的方法
// 在我们使用集合,字典,散列表等数据结构时,能够取出键值对是很有用的.
let arr = [1,2,3,4,5];


// entires方法
// entires返回包含键值对的@@iterator.
let entries = arr.entries();
console.log(entries.next().value); // [ 0, 1 ] - 位置0的值为1
console.log(entries.next().value); // [ 1, 2 ] - 位置1的值为2
console.log(entries.next().value); // [ 2, 3 ] - 位置2的值为3