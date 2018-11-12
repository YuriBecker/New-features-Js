function func () {
  let x = 1
  let y = 2
  return sum()
  function sum () {
    return x + y
  }
}

console.log(func())
// 3

function func2 () {
  let x = 1
  let y = 2
  return sum()
  let sum = () => {
    return x + y
  }
}

// Error
console.log(func2())
