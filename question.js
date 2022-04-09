class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    let { precision=1000 } = options; //Это означает что создаётся новое своейство объекта которое по умлч. = 1000?
    this.precision = precision;
  }
}


//Разница между [[Prototype]]: и prototype