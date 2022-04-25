console.log('----------------------------Task 300: "name-that-integer"----------------------------')
function detect_int(...args) {
    for (let i = 1; /*i < -Math.max()*/; i++){
        if(args.every(fns => fns(i))) {
            return i
        }
    }
}
console.log(detect_int((x) => x % 5 == 0, (x) => x % 3 == 0))


console.log('----------------------------Task:301 "Ho ho ho"----------------------------')
function ho(str) {
  return str !== undefined ? 'Ho ' + str : 'Ho!'
}
console.log(ho(ho(ho())))


console.log('----------------------------Task:303 "Functional Addition"----------------------------')
function add(a) {
  return function (b){
    return a + b
  }
}
let addTwo = add(3)
console.log(addTwo(3))


console.log('-----------Task:304 "currying-functions-multiply-all-elements-in-an-array"-----------')
multiplyAll = a => b => a.map(el => el* b)
console.log(multiplyAll([1, 2, 3])(3))


console.log('----------------------------Task:305 "always"----------------------------')
always = n => () => n
console.log(always(5)())


console.log('----------------------------Task:305 "Function composition"----------------------------')
const addOne = (a) => a + 1
const multTwo = (b) => b * 2
compose = (...args) => (n) => args.reduceRight( (a, b) => b(a), n)
console.log(compose(multTwo, addOne)(5))


console.log('----------------------------Task:306 "lazy repeater"----------------------------')
function makeLooper(str) {
  let count = -1

  return () => {
    count++
    if(count === str.length){
      count = 0
    }
    return str[count]
  }
  /*
    let i = 0;
  return () => str[i++%str.length];
  */
}
let abc = makeLooper('abc')
console.log(abc())


console.log('----------------------------Task:307 "Memo"----------------------------')
function memo(fn) {
  let cache = new Map()
  return (n) => {
    if(!cache.has(n)){
      cache.set(n, fn(n))
    }
    return cache.get(n)
  }
}

console.log('----------------------------Task:308 "once"----------------------------')
function once(fn) {
  let count = true
  return (...x) => {
    if(count){
      count = false
      return fn(...x)
    }
  }
}
logOnce = once(Math.max) 
console.log(logOnce(6, 2, 99, 4))

console.log('----------------------------Task:309 "I Spy"----------------------------')
let worker = (min) => {
  return min*2
}
function spyOn(fn){
  wrapper.calls = [];
  wrapper.countOfCalls = 0;
  wrapper.results = [];
  function wrapper(...args){
    wrapper.countOfCalls++
    wrapper.calls.push(...args)
    let result = fn(...args)
    wrapper.results.push(result)
    return result
  }

  wrapper.callCount = () => wrapper.countOfCalls
  wrapper.wasCalledWith = (val) =>wrapper.calls.includes(val)
  wrapper.returned = (val) => wrapper.results.includes(val)
  
  return wrapper;
}
worker = spyOn(worker)
worker(1)
console.log(worker(5))
console.log(worker.calls)
console.log(worker.wasCalledWith(1))
console.log(worker.returned(8))


console.log('----------------------------Task:311 "Stringing me along"----------------------------')

function createMessage(str) {
  return function repit(x){
    if(x !== undefined){
      return createMessage(str + " " + x);
    } else{
      return str;
    }
  }
}

const f = createMessage("1")("2")("3");

console.log(f("4")("5")()); // "1 2 3 4 5"
console.log(f("7")("8")()); // "1 2 3 7 8"

// console.log( createMessage("Hello")("World!")("how")("are")("you?")() )// === "Hello World! how are you?"


console.log('----------------------------Task:311 "A Chain adding function"----------------------------')
//add(1)(2);
// returns 3


console.log('----------------------------Task:314 "ES5 Generators(i)"----------------------------')

// function* fibonacci() {
//   let [prev, curr] = [0, 1];
//   for (;;) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }

// 1, 1, 2, 3, 5, 8, 13, ...
function fibonacciSeq() {
  let curr = 1
  let prev = 1

  return () => {
    let curr2 = curr;
    let prev2 = prev;
    curr = prev
    prev = curr2 + prev2
    return curr2
  }
}

// const fff = fibonacciSeq();

function generator(fn) {
  return {
    next: fn(),
  }
}

var seq = generator(fibonacciSeq);


console.log(seq.next()) // 1
console.log(seq.next()) // 1
console.log(seq.next()) // 2
console.log(seq.next()) // 3
console.log(seq.next()) // 5
console.log(seq.next()) // 8
console.log(seq.next()) // 13