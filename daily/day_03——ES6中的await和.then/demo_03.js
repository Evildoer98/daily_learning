/*
 * @Descripttion:
 * @version:
 * @Author: Evildoer98
 * @Date: 2021-10-13 23:15:16
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-13 23:33:19
 */

async function fn2() {
    return 1
}

function fn3 () {
    console.log('fn3');
}

let _fn2 = fn2()
// fn2 返回了一个 promise, 某个时刻它会 resolve
console.log(_fn2)    // Promise{...}   返回一个promise对象


const fn1 = () => {
    // .then 已经被添加到链式回调
    _fn2.then( () => {
        fn3()
    })
}

fn1()    // fn3
// 在这种情况下，fn1 函数执行结束之后，fn1函数并不会暂停
// 所以在 fn2 resolve时，fn1 函数的作用域已经没有了
// 但是在js引擎中会额外的记录堆栈信息，再把它附加到 fn2 返回到promise 中，并往下传递
// fn3 函数在需要的时候，就可以获得堆栈信息


async function b() {
    return 1
}
function c() {
    console.log('c');
}

const a = async() => {
    await b()  // console.log(await b());   // 1
    c()
}

a()  // c
/**
 * await b() 会暂停它所在的那个 async 函数的执行
 * 等到异步的b函数执行结束之后
 * 再执行c
 *
 * b 函数左边有 async 关键字，所以b() 返回一个 promise 对象
 * 所以 await 等到的就会是一个 promise 对象
 * 而 await 就会阻塞后面的代码，等这个 promise 对象 resolve
 * 得到 resolve 的值，并做为 await 的结果返回
 */

/**
 * await 比 .then 好在哪里呢？
 *
 * await 不用保存当前的堆栈信息
 * 因为在执行 b 函数的时候，a函数暂停了，它的作用域还在
 */

/**
 * await 必须在 async 里面的原因
 *
 * async 内部的阻塞都在 promise 对象中异步执行了
 * async 直接返回一个 promise 对象
 *
 */


/**
 * 主要就是在堆栈操作的区别
 */