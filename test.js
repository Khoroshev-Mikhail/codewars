Object.create = function(prototype, properties) {
    let obj = {}
    Object.setPrototypeOf(obj, prototype)
    Object.defineProperties(obj, properties)
    return obj
};
let animal = {
    eats: true
  };
let rabbit = {}
Object.setPrototypeOf(rabbit, animal)
Object.defineProperties(rabbit, {
    panic: {
        value: function(){
        return "SNAFU";
        }
    }
})

var citizen = {
    sleep: function(){ return "zzZ..."; },
    panic: function(){ return "AaAaAaAa!"; }
  };
  
  var veteran = Object.create(citizen, {panic: {
      value: function(){
          return "SNAFU";
      }
  }});
  console.log(Object.getOwnPropertyDescriptors(veteran))
  console.log(veteran)
