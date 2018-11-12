class Retangle {
  constructor (_width, _height, _color) {
    this.width = _width
    this.height = _height
    this.color = _color
  }
  getArea () {
    return this.width * this.height
  }
}

let myRetangle1 = new Retangle(3, 5, 'blue')

console.log(myRetangle1.getArea())
