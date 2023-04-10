// every方法会迭代数组中的每个元素,如果某个元素执行期间返回false则every迭代提前结束并返回false.如果迭代至结束未跳出则返回true
// 使用场景,审查数组里的所有元素是否都符合条件
// 返回值:boolean;
const arr = [1,3,5,7,9];
// 判断数组内的元素是否都小于10
let boolean = arr.every(item => item<10);
console.log(boolean);   // true