class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options; //Это означает что создаётся новое своейство объекта которое по умлч. = 1000?
    this.precision = precision;
  }
}


//Разница между [[Prototype]]: и prototype



//От чего идёт наследование?
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}
let arr = new PowerArray(1, 2);
console.log(arr)
//Как унаследовать от Map и какие аргументы передовать в наследующий класс (в д.с. PowerArray)???