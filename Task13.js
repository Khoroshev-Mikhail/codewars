console.log('----------------------------Task:411----------------------------')
var addOne = function(e) { return e + 1 };
var square = function(e) { return e * e }
var bbb = function(e) { return e * 2 }
Function.prototype.pipe = function(fn){
    /*
    const first = this
    return function(el){
        const main = first(el)
        return fn(main)
    }
    */
    return function(el){
        return fn(this(el))
    }.bind(this)
}

var result = addOne.pipe(square).pipe(bbb)
console.log(result(5)); // 72

console.log('----------------------------Task:413----------------------------')
/*
Object.create() - i.e. with no arguments - must throw TypeError
*/

// { prototype: null, properties: undefined }
// { prototype: null, properties: undefined }
// { prototype: undefined, properties: undefined }
// { prototype: null, properties: undefined }

// Object.create() - i.e. with no arguments - must throw TypeError


// Object.create({}, undefined)

Object.create = function(prototype, properties) {
  if(prototype === undefined){
      throw new TypeError('')
  }
  let obj = {}
  Object.setPrototypeOf(obj, prototype)
  if(properties !== undefined){
    Object.defineProperties(obj, properties)
  }
  return obj
};


console.log('----------------------------Task:415----------------------------')
console.log([1,2,3].reduce((a, b) => a ** b, 5));

// If initialValue is not specified,
// previousValue is initialized to the first value in the array,
// and currentValue is initialized to the second value in the array.



Array.prototype.reduce = function(process, initial) {
  let result = this[0]
  if(initial){
    result = process(initial, result, 0, this)
  }
  for(let i = 1; i < this.length; i++){
      result = process(result, this[i], i, this)
  }
  return result
}

console.log([1,2,3].reduce((a, b) => a ** b, 5));

/*
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
*/
let fns = function(x,y){return x+y}
let zzz = ['a','y','!'].reduce(function(x,y){return x+y})
console.log(zzz)



console.log('----------------------------Task:414----------------------------')
function multiply (value, times) {
  switch(typeof value){
      case 'string': 
          if(typeof times !== 'number' || !Number.isInteger(times)){
              throw new Error('Invalid count value')
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


console.log('----------------------------Task:412 Lazy evaluation----------------------------')
//Error
/*
Node.js возвращает результат который и ожидает codewars
Но код в codewars возвращает совсем другие значения: NaN, -Infinity, [], и др...
*/
function Lazy() {
    this.arrayOfFn = []
}
Lazy.prototype.add = function(fn, ...args){
    this.arrayOfFn.push([fn, ...args])
    return this
}
Lazy.prototype.invoke = function(arr){
    this.accum = arr
    for(let i = 0; i < this.arrayOfFn.length; i++){
        let [fn, ...args] = this.arrayOfFn[i]
        this.accum = fn(...args, ...this.accum)
    }
    return this.accum
}



console.log(
            new Lazy()
                .add(filterNumbers) //[1, 8, 6, -1, 4]
                .add(filterRange, 2, 7)
                .add(max)
                .invoke([1, 8, 6, [], "7", -1, {v: 5}, 4])//6
)

function max() {
    return Math.max.apply(null, arguments);
}

function filterNumbers() {
  return Array.prototype.filter.call(arguments, function(value) {
    return isNumeric(value);
  });
}
function filterNumbers(...args){
    return args.filter(value => isNumeric(value))
}



function isNumeric(n) {
  return !isNaN(n) && Number(n) === n;
}

function filterRange(min, max) {
  var args = Array.prototype.slice.call(arguments, 2);
  return Array.prototype.filter.call(args, function(value) {
    return min <= value && value <= max;
  });
}
function filterRange(min, max, ...args){
    return args.filter(value => min <= value && value <= max)
}



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
            //let x = fns[fn].apply(null, args) //Почему не сработало? //6
            let x = func.apply(null, args) //11

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

console.log('----------------------------Task: Binary Swap----------------------------')
//https://www.codewars.com/kata/574ad936a3ebd6b322000d19

function binarySwap(input) {
    /* 
    if(input == 1) return 0
    if(input == 0) return 1
    */

    if(typeof input === 'number' || typeof input === 'string'){
        return input == 1 ? 0 : 1
    }
    if(Array.isArray(input)){
        if(input.length === 1){
            return binarySwap(input[0]) //[[[[1]]]] -> 1
        }
        return input.map(el => binarySwap(el))
    }
    if(typeof input === 'function'){
        return binarySwap(input())
    }
}
//Что за запись  +!+input;    ???
/*
function binarySwap(input) {
  return typeof input === 'function' ? binarySwap(input()): input instanceof Array && input.length > 1 ? input.map(binarySwap): +!+input;
}
*/

//https://www.codewars.com/kata/58069e4cf3c13ef3a6000168 ????????????

//reverse(123)
console.log(Math.floor(123 / 10))

// 123 * 10 + 4 === 1234
//+1111



function reverse(num, reversNum = 0){
    if(num === 0){
        return reversNum
    }
    reversNum = reversNum * 10 + num % 10
    return reverse(Math.floor(num / 10), reversNum)
}
console.log(reverse(1234))