function add1 (nums) {
  console.log(nums)
}

add1(3, 4, 5)
// 3

// When you don't know how many values gonna be inputted
function add2 (...nums) {
  console.log(nums)
}

add2(3, 4, 5)
// [ 3, 4, 5 ]
