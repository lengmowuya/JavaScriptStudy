// some方法和every方法相反,它会迭代数组并执行回调函数,如果回调返回true则提前结束.
// 与every方法一样,都是审查数组,不过因为语义相反,所以some是寻找数组里是否有满足条件的元素
// 返回值:boolean;
let arr = [1,true,'5','666'];
let result = arr.some(item=>typeof item === 'string');
console.log(result);    // true