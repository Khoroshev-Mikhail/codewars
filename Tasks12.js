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