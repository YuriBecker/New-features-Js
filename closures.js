var Make_Counter = function() {
    //Private 
    var privateCounter = 0;
    //Private function
    function changeBy(val) {
      privateCounter += val;
    }
    //public / closures 
    return {
      increment: function() {
        changeBy(1);
      },
      decrement: function() {
        changeBy(-1);
      },
      value: function() {
        return privateCounter;
      }
    }   
  };
  
  const counter1 = Make_Counter()
  const counter2 = Make_Counter()

  console.log(counter1.value())
  console.log(counter2.value())
  counter1.increment()
  counter2.increment()
  counter2.increment()
  console.log(counter1.value())
  console.log(counter2.value())

  //Não aproveita das closures
  function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function() {
      return this.name;
    };
  
    this.getMessage = function() {
      return this.message;
    };
  }

  //Refatorando e melhorando a performance
  function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
  }
  MyObject.prototype = {
    getName: function() {
      return this.name;
    },
    getMessage: function() {
      return this.message;
    }
  };