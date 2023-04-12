// filter方法是迭代数组里的每一个元素,如果迭代返回值为false,则删除该元素
let arr = [1,2,3,4,5,6,7,8,9,0];

// 注意点1:给原型加方法的时候,应该使用普通匿名函数,箭头函数里的this不会指向实例.
// 注意点2:filter是浅拷贝一个新数组返回

// 版本1:自己写的垃圾逻辑,基于人家API和ES6的新特性-扩展函数
    /* Array.prototype.myFilter1 = function(func){
        let newArr = [...this];
        newArr.forEach((item,i)=>{
            if(!func(item,i)){
                newArr.splice(i,1);
            }
        })
        return newArr;
    } */

// 版本2:阿布指点的filter优秀写法
Array.prototype.myFilter = function(func){
    let arr = [];
    this.forEach((item,index)=>{
        // 普通人的写法
            // if(func(item,index)){
            //     arr.push(item);
            // }
        // 阿布展示的骚写法
        func(item,index) && arr.push(item);
    })
    return arr;
}
let newArr = arr.myFilter(num=>num%2===0);
console.log(arr);
    /* [
        1, 2, 3, 4, 5,
        6, 7, 8, 9, 0 
    ] */
console.log(newArr);    // [ 2, 4, 6, 8, 0 ]