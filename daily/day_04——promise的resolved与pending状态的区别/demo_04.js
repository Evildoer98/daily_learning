/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-14 23:38:13
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-14 23:47:29
 */

async function fn1 () {
    return 1
}

async function fn2 () {
    return Promise.resolve(222)
}

let _f1 = fn1()
let _f2 = fn2()

console.log(_f1);   // Promise {<resolved>: 1}
console.log(_f2);   // Promise {<pending>}     整体处于异步操作中，但是进入详细信息中显示的是 resolved

// 以参数形式接收到值
_f2.then(n => {
    console.log(n);   // 222
    console.log(_f2);  //Promise {<resolved>: 1};
})

// 状态没变, 因为是异步的操作，先执行 22 行，再执行 .then
console.log(_f2);  // Promise {<pending>}  


