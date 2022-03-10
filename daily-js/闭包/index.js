function makeAdder(a) {
  return function(b) {
    return a+b
  }
}

var add5 = makeAdder(5)
var add20 = makeAdder(20)

add5(6) // 11
add20(7) // 27


