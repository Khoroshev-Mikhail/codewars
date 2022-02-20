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
