// 单例模式的核心是确保只有一个实例,并提供全局访问

// 优秀的单例对象无需让使用者知道这是一个单例.可以按照其他对象的使用方式正常使用.

// 在JS中使用代理组合成一个单例
let Person = function(){
    this.name = 'person';
    this.age = 18;
}
let PersonCreate = (function(){
    var instance;
    // 为了存储通用闭包变量
    return function(){
        if(!instance){
            instance = new Person();
        }
        return instance;
    }
})();
let a = new PersonCreate();
let b = new PersonCreate();
console.log(a === b);   // true


// 但JS其实是一门无类语言,所以在JS中生搬单例模式的概念没有什么意义.
// 所以在JS中基于类的单例模式并不通用