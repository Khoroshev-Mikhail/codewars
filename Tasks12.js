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

  // Note : "input format" to .fullName will be firstName + space+ lastName.
  // If given fullName isn't valid then no property is changed.


  set fullName(str){
    // /^[^ ]* [^ ]*$/
      if((/^[^ ]* [^ ]*$/).test(str)){ // "      "
        [this.firstName, this.lastName]  = str.split(/[\s_]/)
      }
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
    if(!(path in this.route)){
      this.route[path] = {}
    }
    this.route[path][method] = fn
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
// class Person2 {
//     constructor(name, age) {
//       this.name = name
//       this.age = age
//     }
//     get info(){
//       return `${this.name}s age is ${this.age}`
//     }
//   }
var Person2 = function(name, age){
  this.name = name
  this.age = age
}
// Person2.prototype


Object.defineProperty(Person2.prototype, 'info', {
  get : function(){
    return `${this.name}s age is ${this.age}`
  }
})

var John = new Person2('Jogn', 34)
console.log(John.info)

console.log('----------------------------Task:410----------------------------')
/*
lassy Extensions
Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. 
You will be preloaded with the Animal class, so you should only edit the Cat class.
Task
Your task is to complete the Cat class which Extends Animal and replace the speak method to 
return the cats name + meows. e.g. 'Mr Whiskers meows.'
The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).
*/
class Cat2 extends Animal{
    constuctor(name){
        this.name = name
    }
    speak(){
        return `${this.name} meows.`
    }
}
var cat = new Cat2('Mr Whiskers');
console.log(cat.speak())

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


console.log('----------------------------Task:415----------------------------')
Array.prototype.reduce = function(process, initial) {
  let result = initial;
  for(let i = 0; i < this.length; i++){
      if(!result && typeof this[0] === 'string'){
          result = ''
      }
      if(!result && typeof this[0] === 'number'){
          result = 0
      }
      result = process(result, this[i])
  }
  return result
}

//Error
Array.prototype.reduce = function(process, initial) {
  if(this.length === 1){
      return this[0]
  }
  if(initial){
      return process(initial, process(this[0], this.slice(1).reduce(process)))
  }
  return process(this[0], this.slice(1).reduce(process))
}

//Нужно добавить вариант на отсутствие initial
Array.prototype.reduce = function(process, initial){
  if(this.length === 0){
    return initial
  }
  return this.slice(1).reduce(process, process(initial, this[0]))
}

let fns = function(x,y){return x+y}
let zzz = ['a','y','!'].reduce(function(x,y){return x+y})
console.log(zzz)



console.log('----------------------------Task:414----------------------------')
function multiply (value, times) {
  switch(typeof value){
      case 'string': 
          if(typeof times !== 'number' || !Number.isInteger(times)){
              return new RangeError('Invalid count value')
          }
          return value.repeat(times)
      case 'number':
          return value * times
      case 'object':
          if(value === null){
              return null
          }
          return new Array(times).fill(value)
      case 'function':
          return function(){
              for(let i = 0; i < times; i++){
                  value.call(this, ...arguments)
              }
          }
      default:
          return value
  }
}
//Expected error was thrown: RangeError: Invalid count value
/*
'foo' * 0.3 should error
'foo' * '1' should error
'foo' * 'a' should error
'foo' * NaN should error
'foo' * {} should error
'foo' * Infinity should error
'foo' * -Infinity should error
*/

