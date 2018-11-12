// Same name
function addressMaker (city, state) {
  const newAdress = { city, state }
  console.log(newAdress)
}

addressMaker('Canoas', 'RS')

function addressMaker2 (address) {
  const { city, state, country } = address
  const newAdress = {
    city,
    state,
    country
  }
  console.log(newAdress)
}

addressMaker2({ city: 'Canoas', state: 'RS', country: 'Brazil' })
