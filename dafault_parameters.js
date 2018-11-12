// Set default to array
function sum (numArray = []) {
  let total = 0
  numArray.forEach(element => {
    total += element
  })
  console.log(total)
}

sum([1, 2, 3]) // 6

sum() // 0

// Without the default array
sum() // ERROR
