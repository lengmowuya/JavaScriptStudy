// reduce方法会返回一个数组,返回数组里只会留下迭代返回为true的元素
// 使用思路:批量剔除不满足要求的元素

// 剔除奇数,只留下数组中的偶数
const evenArr = [1,2,3,4,5,6,7,8,9,0].filter(num=>num%2===0);
console.log(evenArr);   // [ 2, 4, 6, 8, 0 ]

// map,filter,reduce三个迭代方法是JS函数式编程的基础