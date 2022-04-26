console.log('----------------------------Task:411----------------------------')
var addOne = function(e) { return e + 1 };
var square = function(e) { return e * e }
var bbb = function(e) { return e * 2 }
Function.prototype.pipe = function(fn){
    // const first = this
    //Переделать через байнд
    return function(el){
        const main = this(el)
        return fn(main)
    }
}

var result = addOne.pipe(square).pipe(bbb)
console.log(result(5)); // 72

console.log('----------------------------Task:412----------------------------')
/*
Object.create() - i.e. with no arguments - must throw TypeError
*/
Object.create = function(prototype, properties) {
  if(!prototype && !properties){
      return new TypeError('')
  }
  let obj = {}
  Object.setPrototypeOf(obj, prototype)
  if(properties){
    Object.defineProperties(obj, properties)
  }
  return obj
};


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
              return new Error('Invalid count value')
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

console.log('----------------------------Task:315 Born to be chained----------------------------')
function sum(x, y) {
    return x + y;
  }
  
  function double(x) {
    return sum(x, x);
  }
  
  function minus (x, y) {
    return x - y;
  }
  
  function addOne(x) {
    return sum(x, 1);
}

function chain(fns) {
    function Wrapper(x){
        this.accum = x
    }
    for(fn in fns){
        let func = fns[fn]
        Wrapper.prototype[fn] = function(){
            let args = Array.from(arguments)
            if(this.accum){
                args.unshift(this.accum)
            }
            //let x = fns[fn].apply(null, args) Почему не сработало?
            let x = func.apply(null, args)

            return new Wrapper(x)
        }
    }
    Wrapper.prototype.execute = function(){
        return this.accum
    }
    return new Wrapper()
}
var c = chain({sum: sum, minus: minus, double: double, addOne: addOne});
console.log(c.sum(5, 6).execute())