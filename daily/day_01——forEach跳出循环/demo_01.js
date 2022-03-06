let arr = [1, 2, 3, 4, 5]

arr.forEach(item => {
    if (item === 2) {
        // console.log(item);
        // break; 报错
        // contiue; 报错
        return  // 仅仅跳过当前  item === 2 的函数
    }
    console.log(item); // 1, 3, 4, 5
})

let k = null
try {
    arr.forEach(item => {
        if (item === 2) {
            k = item
            throw Error()
        }
    })
} catch (e) {
    
}
console.log(k);