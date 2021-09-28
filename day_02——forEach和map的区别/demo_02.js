// forEach
let arr1 =[3, 4, 5]
let _n = arr1.forEach((item, index, input) => {
    console.log(item, index, input); 
    // a, 0, [3, 4, 5]
    // b, 1, [3, 4, 5]
    // c, 2, [3, 4, 5]
    console.log(this);  // Window{...}
    // return item // 使用 return 是没有返回值的
    input[index] = item + 1
})
console.log(arr1); // [3, 4, 5]
console.log(_n);  // 如果使用return，则返回 undefined

// map
let arr2 = [1, 2, 3]
let _m = arr.map((item, index, input) => {
    console.log(item, index, input);
    // a, 0, [1, 2, 3]
    // b, 1, [1, 2, 3]
    // c, 2, [1, 2, 3]
    console.log(this);  // Window{...}
    return item + 1
})
console.log(arr2); // [1, 2, 3]
console.log(_m); // [2, 3, 4]