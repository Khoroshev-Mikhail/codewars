console.log('----------------------------Task:406----------------------------')
class NamedOne {
  constructor(firstName, lastName){
      this.firstName = firstName
      this.lastName = lastName
      //this.fullName = this.firstName + ' ' + this.lastName
  }
  get fullName(){
      return this.firstName + ' ' + this.lastName
  }
  set fullName(str){
      [this.firstName, this.lastName]  = str.split(/[\s_]/)
  }
}
let ara = new NamedOne('Mike', 'Khoroshev')
ara.fullName = 'Jovanni_Boldinni'
//console.log(ara)

/*
full name should not be changed! - Values should not be equal: 'Hans Schmidt'
Test Passed: Value != 'Hans_Schmidt'
Test Passed: Value != ''
Test Passed: Value != 'SchtruwwelPeter'
Log
...in this case names should be the same
Wrong full name - Expected: 'Juan Herrero', instead got: 'SchtruwwelPeter undefined'
Wrong last name - Expected: 'Herrero', instead got: undefined
Wrong first name - Expected: 'Juan', instead got: 'SchtruwwelPeter'
*/

console.log('----------------------------Task:407----------------------------')
class Router{
  constructor(){
    this.route = {}
  }
  bind(path, method, fn){
    if(path in this.route){
      this.route[path][method] = fn
    } else{ //Вроде всегда есть возмоность переписать код так, чтобы обойтись без else
      this.route[path] = {[method] : fn}
    }
  }
  runRequest(path, method){
    if(! (path in this.route)){
      return 'Error 404: Not Found'
    }
    return this.route[path][method]()
  }
}
console.log('----------------------------Task:408----------------------------')
class Person{
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male' ){
    Object.assign(this, { firstName, lastName, age, gender})
  }
  sayFullName(){
    return [this.firstName, this.lastName].join(' ')
  }
  static greetExtraTerrestrials(raceName){
    return `Welcome to Planet Earth ${raceName}`
  }
}


console.log('----------------------------Task:409----------------------------')
class Person2 {
    constructor(name, age) {
      this.name = name
      this.age = age
    }
    get info(){
      return `${this.name}s age is ${this.age}`
    }
  }

console.log('----------------------------Task:410----------------------------')
/*class Cat extends Animal {
    constuctor(name){
        this.name = name
    }
    speak(){
        return `${this.name} meows.`
    }
}*/

console.log('----------------------------Task:411----------------------------')
var addOne = function(e) { return e + 1 };
var square = function(e) { return e * e }
var bbb = function(e) { return e * 2 }
Function.prototype.pipe = function(...args){
    const first = this
    return function(el){
        let resOne = first(el)
        return args.reduce((a, b) => b(a), resOne)
    }
}

var result = [1,2,3,4,5].map(addOne.pipe(square, bbb))
console.log(result)

console.log('----------------------------Task:412----------------------------')
//Ошибка при первом вызове в тестах
//TypeError: Cannot convert undefined or null to object
//Вторым аргументом приходит undefined 
Object.create = function(prototype, properties) {
  let obj = {}
  Object.setPrototypeOf(obj, prototype)
  Object.defineProperties(obj, properties)
  return obj
};

var citizen = { //null
  sleep: function(){ return "zzZ..."; },
  panic: function(){ return "AaAaAaAa!"; }
};
var veteran = Object.create(citizen, {panic: {
  value: function(){
      return "SNAFU";
  }
}});
console.log(Object.getOwnPropertyDescriptors(veteran))
console.log(citizen)