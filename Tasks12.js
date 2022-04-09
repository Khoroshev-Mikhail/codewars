class CoffeeMachine {
    _waterAmount = 10;
  
    setWaterAmount(value) {
      if (value < 0) throw new Error("Отрицательное количество воды");
      this._waterAmount = value;
    }
  
    getWaterAmount() {
      return this._waterAmount;
    }
  }
  
 let machine = new CoffeeMachine()
class MegaCoffeeMachine extends CoffeeMachine {
    method() {
      console.log( this._waterAmount ); // Error: can only access from CoffeeMachine
    }
  }
  let ara = new MegaCoffeeMachine()
  ara.method()