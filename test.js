var citizen = {
    sleep: function(){ return "zzZ..."; },
    panic: function(){ return "AaAaAaAa!"; }
};
  
var veteran = Object.create(citizen, {panic: {
    value: function(){
        return "SNAFU";
    }
}});

Object.create = function(prototype, properties) {
    if(typeof prototype !== 'object'){
        return new TypeError('')
    }
    let obj = {}
    Object.setPrototypeOf(obj, prototype)
    Object.defineProperties(obj, properties)
    return obj
    //And remember: you need not to reinvent Object.defineProperties on your own!
  };
console.log(Object.getOwnPropertyDescriptors(veteran))