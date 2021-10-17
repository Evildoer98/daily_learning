/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-17 23:13:32
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-18 00:06:22
 */

// 普通的、同步的异常捕获
try {
    throw new Error('Evildoer')
} catch (err) {
    console.log(err);
}


// 异步 promise的异步的异常捕获
async function fn1 () {
    let n = Promise.reject('666')
    console.log(n);   // err

    try {
        await n    // 不加 await 则无法捕获
        console.log(n); 
    } catch (err) {
        console.log('err' + err);
    } finally {
        
    }
}

fn1()