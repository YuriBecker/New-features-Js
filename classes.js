class Retangle {
  constructor (_width, _height, _color) {
    this.width = _width
    this.height = _height
    this.color = _color
  }
  getArea () {
    return this.width * this.height
  }
  static stcFunc () {
    return 'Text from a static function'
  }
  get retColor () {
    return `Color: ${this.color}`
  }
}

let myRetangle1 = new Retangle(3, 5, 'blue')

console.log(myRetangle1.getArea())

// Get don't need ()
console.log(myRetangle1.retColor)

// Don't need create a obj to use the function
console.log(Retangle.stcFunc())
