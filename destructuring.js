// Object
const personalInformation = {
  firstName: 'Yuri',
  lastName: 'Becker',
  city: 'Santa Maria',
  state: 'RS',
  age: '19'
}

// Same name

const { firstName, lastName } = personalInformation

console.log(`${firstName} ${lastName}`)

// Rename

const { firstName: fn, lastName: ln } = personalInformation

console.log(`${fn} ${ln}`)

// Arrays

// let [firstName, middleName, lastName] = ['Yuri', 'Amaral', 'Becker']

// console.log(`${firstName} ${middleName} ${lastName}`)
