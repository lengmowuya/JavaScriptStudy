// ES6中,Array类中新增了一个迭代器对象(@@iterator),需要通过Symbol.iterator来访问
let arr = [1,2,3,4,5];
let iterator = arr[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5
console.log(iterator.next().value); // undefined


