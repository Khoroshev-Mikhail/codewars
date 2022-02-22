console.log('----------------------------Task:500 "Factorial"----------------------------')
function smartSum(...x){
  return x.reduce((a,b) => {
    if(!Array.isArray(b)){
      return a + b
    }
    return a + smartSum(...b)
  }, 0)
}
console.log(smartSum(1,2,[[3,4],5],6))

console.log('----------------------------Task:504 "Digits Average"----------------------------')
function digitsAverage(input) {
  let arr = [...input.toString()].map(Number)
  if(arr.length === 1){
    return input
  }
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    if(i < arr.length - 1){
      newArr.push(Math.round((arr[i] + arr[i + 1])/2))
    }
  }
  const result = +newArr.join('')
  return digitsAverage(result)
}
console.log(digitsAverage(246))

console.log('----------------------------Task:503 "happy-numbers-5"----------------------------')
let cache = new Set()
function isHappyNumber(x){
  if(cache.has(x)){
    cache = new Set()
    return false
  }  
  if(x === 1){
    cache = new Set()
    return true
  }
  cache.add(x)
  let newX = [...x.toString()].map(Number).reduce((a, b) => a + Math.pow(b, 2), 0)
  return isHappyNumber(newX)
}
function happyNumbers(x){
  let result = []
  for(let i = 0; i <= x; i++){
    if(isHappyNumber(i)){
      result.push(i)
    }
  }
  return result
}
console.log(happyNumbers(100))

console.log('----------------------------Task:220 "Is a number prime?"----------------------------')
function isPrime(num) {
  if(num <= 1 || num % 1 != 0) {
    return false
  }
  for(let i = 2; i < num; i++){
    if(num % i == 0){
      return false
    }
  }
  return true
}
console.log(isPrime(197))

console.log('----------------------------Task:227 "Sorting by bits"----------------------------')
function countOfBits(x) {
  const length = Math.floor(Math.log2(x))
  let result = []
  for(let i = length; i >= 0; i--){
    result.push(Math.pow(2, i))
  }
  for(let i = 0; i <= length; i++){
    if( (x - result[i]) >= 0 ){
      x = x - result[i]
      result[i] = 1
    } else{
      result[i] = 0
    }
  }
  return result.filter(el => el === 1).length
}
function sortByBit(arr) {
  return arr.sort((a, b) => countOfBits(a) - countOfBits(b) || a - b)
}

console.log('----------------------------Task:310 "Church Booleans"----------------------------')
const True = T => F => T
const False = T => F => F

const And = A => B => A(B)(False);
// And(True)(True) === True
// And(True)(False) === False  
// And(False)(True) === False
// And(False)(False) === False

const Or = A => B => A(True)(B)
// OR(True)(True) === True
// Or(False)(True) === True
// Or(True)(False) === True
// OR(False)(False) === False 

const Not = A => A(False)(True)
// Not(False) === True
// Not(True) === False

const Xor = A => B => A(B(False)(A))(A(True)(B))
// Xor(True)(True) === False
// Xor(False)(True) === True
// Xor(True)(False) === True
// Xor(False)(False) === False

console.log('----------------------------Task:313 "Currying-vs-partial-application"----------------------------')
function curryPartial(fn, ...args) {
    if(fn.length <= args.length){
        return fn(...args)
    }
    return function currentCurry(...x){
        return curryPartial(fn, ...args, ...x)
    }
}

console.log('----------------------------Task:314 "ES5 Generators(i)"----------------------------')
function generator(fn, ...args){
    return {
        next: fn(...args),
    }
}
function fibonacciSeq(){
    let curr = 1;
    let prev = 1;
    return () => {
        let curr2 = curr;
        curr = prev;
        prev += curr2
        return curr2
    }
}
//var seq = generator(fibonacciSeq)
function factorialSeq(){
    let n = -1; //Рефакторинг в данном случае???
    function factorial(n){
        if(n <= 1){
            return 1
        }
        return n * factorial(n - 1)
    }
    return () => {
        n++
        return factorial(n)
    }
}
//var seq = generator(factorialSeq)
function rangeSeq(start, step){
    let currentStep = start - step; //Рефакторинг? Как изменить переменную после её возвращения
    return () => {
        currentStep += step;
        return currentStep
    }
}
//var seq = generator(rangeSeq, 1, 2)
function isPrime(num) {
    if(num <= 1 || num % 1 != 0) {
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i == 0){
        return false
        }
    }
    return true
}
function primeSeq(){
    let primeNum = 1;
    return () => {
        do{
            primeNum++
        }while(!isPrime(primeNum))
        return primeNum
    }
}
function partialSumSeq(...args){
    let arr = []
    let i = -1 //Тоже самое
    args.reduce((a, b) => {
        arr.push(a + b)
        return a + b
    }, 0)
    return () =>{
        i++
        if(arr[i] === undefined){
            return error;
        }
        return arr[i]
    }

}
//var seq = generator(partialSumSeq, 1, 3, 7, 2, 0)

console.log('----------------------------Task:316 "multiFilter"----------------------------')
function isEven(el){
    return el % 2 === 0;
}
function isGTten(el){
    return el > 10;
}
function islessThenFifteen(el){
    return el < 15
}
var multiFilter = function(){
	return (x) => {
        return Object.values(arguments).every(fn => fn(x))
    }
};
console.log([1,2,3,4,10,11,12,20,21,22].filter(multiFilter(isEven, isGTten, islessThenFifteen)))

console.log('----------------------------Task:317 "Combinator Flip"----------------------------')
function flip(fn) {
    return (...x) =>{
        return fn(...x.reverse())
    }
}
function print(a,b) {
    return a + " -> " + b;
}
console.log(flip(print)(4, 5))