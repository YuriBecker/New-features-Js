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
}

let myRetangle1 = new Retangle(3, 5, 'blue')

console.log(myRetangle1.getArea())

// Don't need create a obj to use the function
console.log(Retangle.stcFunc())
