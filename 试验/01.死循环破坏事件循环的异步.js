// 事件循环,如果下方死循环,事件循环会被永远堵塞.
setTimeout(()=>{
    console.log('Hello');     // 永远无法输出
},1000);
while(1){
    let a = 5;
}