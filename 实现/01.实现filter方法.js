// filter方法是迭代数组里的每一个元素,如果迭代返回值为false,则删除该元素
let arr = [1,2,3,4,5,6,7,8,9,0];

// 注意点:给原型加方法的时候,应该使用普通匿名函数,箭头函数里的this不会指向实例.
Array.prototype.myFilter = function(func){
    this.forEach((item,i)=>{
        if(!func(item,i)){
            this.splice(i,1);
        }
    })
}
arr.myFilter(num=>num%2===0);
console.log(arr);