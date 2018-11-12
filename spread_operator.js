let arr1 = ['Tony', 'Bruce', 'Steve']
let arr2 = arr1

arr1.push('Peter')

// [ 'Tony', 'Bruce', 'Steve', 'Peter' ]
console.log(arr2)

let arr3 = ['Tony', 'Bruce', 'Steve']
let arr4 = [...arr3]

arr3.push('Peter')

// [ 'Tony', 'Bruce', 'Steve' ]
console.log(arr4)

let x = ['clark', 'bruce', 'louis']
let y = ['lex', 'jorel']

// OR let z = x.concat(y);
let z = [...x, ...y]

// [ 'clark', 'bruce', 'louis', 'lex', 'jorel' ]
console.log(z)
